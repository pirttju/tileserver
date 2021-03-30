## tileserver
Vector map service

This repository contains configuration for Tileserver GL to serve OpenRailwayMap inspired vector tiles.

## Installing

Install dependencies from NPM:
```
npm install
```

### Vector tiles (MBTiles)

Use [OpenMapTiles-Railway](https://github.com/pirttju/openmaptiles-railway) to generate the vector tiles in mbtiles format.

Put the resulting tiles.mbtiles file under the ./tiles directory.

### Styles

Clone https://github.com/pirttju/openrailwaymap-gl-style under the ./styles directory.

### Fonts

These fonts from the Roboto font family are required:
- Roboto Bold
- Roboto Light
- Roboto Light Italic
- Roboto Medium
- Roboto Medium Italic
- Roboto Regular

Download [protobuf-encoded glyphs](https://github.com/bravecow/fonts.pbf). Put them under the ./fonts directory.

## Running

Run tileserver:
```
npx tileserver-gl-light
```

## Deployment

Running tileserver behind a proxy is recommended. Sample configuration for Nginx:
```
upstream tileserver {
    server 127.0.0.1:8080;
    keepalive: 64;
}

server {
    listen 80;
    listen [::]:80;
    server_name tile.raiteilla.fi;

    location /robots.txt {
        add_header Content-Type text/plain;
        return 200 "User-agent: *\nDisallow: /\n";
    }

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://tileserver/;
    }
}
```

Run tileserver as a daemon process with PM2:
```
pm2 start
```
