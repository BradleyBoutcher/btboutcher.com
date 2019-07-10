.PHONY: dev test help
.DEFAULT_GOAL: help

default: help

help: ## Output available commands
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

dev:  ## Run a development environment on port 3000
	@docker-compose -f docker/Development/docker-compose.yml up -d --build dev

tests: ## Run the current test suite
	@docker-compose -f docker/Development/docker-compose.yml run --rm tests

production: ## Deploy or update a production build 
	@docker-compose -f docker/Production/docker-compose.yml up --force-recreate production

staging: ## Deploy or update a production build 
	@docker-compose -f docker/Staging/docker-compose.yml up --force-recreate staging