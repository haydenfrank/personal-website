@default:
	just build
	just run

@build:
	docker build -t haydenbfrank/website:0.0.0 .
	
@run:
	docker run --name website -p 3000:3000 haydenbfrank/website:0.0.0 &

@kill:
	docker kill website
	docker rm website
