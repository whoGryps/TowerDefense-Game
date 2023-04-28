(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("TowerDefenseBuildingTiles",
{ "compressionlevel":-1,
 "height":14,
 "infinite":false,
 "layers":[
        {
         "data":[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17,
            29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31],
         "height":14,
         "id":1,
         "name":"Background Layer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":22,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 23, 24, 25, 0, 0, 23, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 23, 24, 25, 0, 0, 23, 24, 13, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 0, 0,
            0, 0, 23, 24, 25, 0, 0, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 0, 0,
            0, 0, 23, 24, 25, 0, 0, 37, 38, 38, 38, 38, 38, 38, 38, 38, 38, 26, 24, 25, 0, 0,
            0, 0, 23, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 24, 25, 0, 0,
            0, 0, 23, 24, 25, 0, 0, 0, 66, 66, 66, 66, 66, 66, 0, 0, 0, 23, 24, 25, 0, 0,
            0, 0, 23, 24, 25, 0, 0, 9, 10, 10, 10, 10, 10, 10, 11, 0, 0, 23, 24, 25, 0, 0,
            0, 0, 23, 24, 25, 0, 0, 23, 24, 24, 24, 24, 24, 24, 25, 0, 0, 23, 24, 25, 0, 0,
            0, 0, 23, 24, 25, 0, 0, 23, 24, 27, 38, 38, 26, 24, 25, 0, 0, 23, 24, 25, 0, 0,
            0, 0, 23, 24, 13, 10, 10, 12, 24, 25, 0, 0, 23, 24, 13, 10, 10, 12, 24, 25, 0, 0,
            0, 0, 23, 24, 24, 24, 24, 24, 24, 25, 0, 0, 23, 24, 24, 24, 24, 24, 24, 25, 0, 0,
            0, 0, 37, 38, 38, 38, 38, 38, 38, 39, 0, 0, 37, 38, 38, 38, 38, 38, 38, 39, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":14,
         "id":2,
         "name":"Path",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":22,
         "x":0,
         "y":0
        }, 
        {
         "data":[134, 135, 0, 0, 0, 87, 88, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 103,
            131, 132, 0, 0, 0, 101, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 63,
            145, 146, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 134, 135, 0, 0, 0, 0, 0,
            94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 114, 115,
            87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 128, 129,
            101, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 142, 143],
         "height":14,
         "id":3,
         "name":"Details1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":22,
         "x":0,
         "y":0
        }, 
        {
         "data":[117, 118, 0, 0, 0, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 48,
            131, 132, 0, 0, 0, 71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 0, 0,
            145, 146, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 43, 0, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 45, 0, 0,
            0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 48],
         "height":14,
         "id":4,
         "name":"Details2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":22,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":0,
                 "id":3,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":230.30303030303,
                         "y":-136.363636363636
                        }, 
                        {
                         "x":224.242424242424,
                         "y":672.727272727273
                        }, 
                        {
                         "x":548.484848484848,
                         "y":672.727272727273
                        }, 
                        {
                         "x":548.484848484848,
                         "y":472.727272727273
                        }, 
                        {
                         "x":863.636363636364,
                         "y":472.727272727273
                        }, 
                        {
                         "x":860.606060606061,
                         "y":681.818181818182
                        }, 
                        {
                         "x":1193.93939393939,
                         "y":678.787878787879
                        }, 
                        {
                         "x":1190.90909090909,
                         "y":154.545454545455
                        }, 
                        {
                         "x":548.484848484848,
                         "y":157.575757575758
                        }, 
                        {
                         "x":551.515151515152,
                         "y":-257.575757575758
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0,
            0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0,
            14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0,
            14, 0, 0, 0, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0,
            0, 0, 0, 0, 0, 14, 0, 0, 14, 0, 14, 0, 14, 0, 0, 14, 0, 0, 0, 0, 14, 0,
            0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0,
            14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0,
            14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0,
            14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0,
            0, 0, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0],
         "height":14,
         "id":7,
         "name":"PlacementTiles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":22,
         "x":0,
         "y":0
        }],
 "nextlayerid":8,
 "nextobjectid":4,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.1",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"tileset.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":22
});