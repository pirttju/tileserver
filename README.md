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