# Raccourcis Docker — `make help` pour la liste
COMPOSE     = docker compose
COMPOSE_DEV = docker compose -f docker-compose.yml -f docker-compose.dev.yml

.PHONY: help dev up down logs build rebuild health clean

help:      ## Affiche cette aide
	@grep -E '^[a-z]+:.*##' $(MAKEFILE_LIST) | awk -F':.*## ' '{printf "  make %-8s %s\n", $$1, $$2}'

dev:       ## Lance en développement (src/ monté, rechargement sans rebuild)
	$(COMPOSE_DEV) up --build

up:        ## Lance en production, en arrière-plan
	$(COMPOSE) up -d --build

down:      ## Arrête et supprime les conteneurs
	$(COMPOSE) down

logs:      ## Affiche les journaux en continu
	$(COMPOSE) logs -f

build:     ## Construit l'image de production
	$(COMPOSE) build

rebuild:   ## Reconstruit sans cache puis relance
	$(COMPOSE) build --no-cache && $(COMPOSE) up -d

health:    ## Vérifie l'état de santé du conteneur
	@docker inspect --format '{{.State.Health.Status}}' portfolio

clean:     ## Supprime conteneurs et images du projet
	$(COMPOSE) down --rmi local
