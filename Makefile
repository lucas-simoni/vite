.DEFAULT_GOAL := help
SHELL         := /usr/bin/env bash
MAKEFLAGS     += --warn-undefined-variables --no-builtin-rules

export APP_SLUG := $(shell grep -oP '"name": "\K[^"]*' package.json)
APP_VERSION     := $(shell grep -oP '"version": "\K[^"]*' package.json)


.PHONY: help
help:
	@echo -e "Usage: make \033[36m<command>\033[0m"
	@echo
	@echo 'Commands:'
	@awk 'BEGIN {FS = ":.*##"; printf "\033[36m\033[0m"} /^[$$()% 0-9a-zA-Z_-]+:.*?##/ { printf "    \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

.PHONY: bootstrap
bootstrap:		## Spin a development container and exec into it.
	./scripts/docker-compose-up.sh ./docker/docker-compose.yml -d
	./scripts/docker-compose-exec.sh ./docker/docker-compose.yml app

.PHONY: lint
lint:					## Run linters within a Docker container.
	./scripts/docker-compose-up.sh ./docker/docker-compose-lint.yml --abort-on-container-exit

.PHONY: test
test:					## Run unit tests within a Docker container.
	./scripts/docker-compose-up.sh ./docker/docker-compose-test.yml --abort-on-container-exit

.PHONY: nginx
nginx:				## Build the application for development and serve it using NGINX within a container.
	./scripts/docker-compose-up.sh ./docker/docker-compose-nginx.yml -d

.PHONY: down
down:					## Stop and remove containers, networks, volumes, and images created by the commands above.
	./scripts/docker-compose-down.sh ./docker/docker-compose.yml

.PHONY: docker-build
docker-build:	## Build and tag the Docker image using
ifneq ($(filter ${BUILD_MODE},development stage production),)
	@echo Building Docker image for the ${BUILD_MODE} environment...

	@docker build --build-arg BUILD_MODE=${BUILD_MODE} \
		-t dkr.ecr.region.amazonaws.com/${APP_SLUG}:${APP_VERSION} .
else
	@echo "The BUILD_MODE environment variable is required."
	@echo "Values: <development | stage | production>"
	@exit 1
endif
