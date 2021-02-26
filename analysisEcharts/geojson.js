var wkx = require('wkx')
// GeoJSON Feature Collection
function FeatureCollection() {
  this.type = 'FeatureCollection'
  this.features = new Array()
}

exports.rows_to_geojson = function(rows, propertiesObject) {
  var featureCollection = new FeatureCollection()
  featureCollection.features = rows.map(function(row) {
    var buf = new Buffer(row.geom, 'hex')
    var properties = {}
    for (var p in propertiesObject) {
      namePropertie = propertiesObject[p]
      properties[namePropertie] = row[namePropertie]
    }
    return {
      type: 'Feature',
      geometry: wkx.Geometry.parse(buf).toGeoJSON(),
      properties: properties
    }
  })

  return featureCollection
}
