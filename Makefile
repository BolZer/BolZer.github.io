start:
	docker-compose up -d

end:
	docker-compose down

install:
	docker exec -it portfolio_node pnpm install

build:
	docker exec -it portfolio_node pnpm run build

serve:
	docker exec -it portfolio_node pnpm run serve