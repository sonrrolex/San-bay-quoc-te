var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Airports_1 = new ol.format.GeoJSON();
var features_Airports_1 = format_Airports_1.readFeatures(json_Airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airports_1.addFeatures(features_Airports_1);
var lyr_Airports_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airports_1, 
                style: style_Airports_1,
                popuplayertitle: 'Airports',
                interactive: true,
    title: 'Airports<br />\
    <img src="styles/legend/Airports_1_0.png" /> 2<br />\
    <img src="styles/legend/Airports_1_1.png" /> 3<br />\
    <img src="styles/legend/Airports_1_2.png" /> 4<br />\
    <img src="styles/legend/Airports_1_3.png" /> 5<br />\
    <img src="styles/legend/Airports_1_4.png" /> 6<br />\
    <img src="styles/legend/Airports_1_5.png" /> 7<br />\
    <img src="styles/legend/Airports_1_6.png" /> 8<br />\
    <img src="styles/legend/Airports_1_7.png" /> 9<br />\
    <img src="styles/legend/Airports_1_8.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Airports_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Airports_1];
lyr_Airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', });
lyr_Airports_1.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'TextEdit', 'location': 'TextEdit', 'gps_code': 'TextEdit', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'TextEdit', 'comments': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'wdid_score': 'Range', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', });
lyr_Airports_1.set('fieldLabels', {'scalerank': 'hidden field', 'featurecla': 'hidden field', 'type': 'inline label - always visible', 'name': 'inline label - always visible', 'abbrev': 'hidden field', 'location': 'inline label - always visible', 'gps_code': 'inline label - always visible', 'iata_code': 'hidden field', 'wikipedia': 'inline label - always visible', 'natlscale': 'hidden field', 'comments': 'hidden field', 'wikidataid': 'hidden field', 'name_ar': 'hidden field', 'name_bn': 'hidden field', 'name_de': 'hidden field', 'name_en': 'inline label - always visible', 'name_es': 'hidden field', 'name_fr': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'name_hu': 'hidden field', 'name_id': 'hidden field', 'name_it': 'hidden field', 'name_ja': 'inline label - always visible', 'name_ko': 'hidden field', 'name_nl': 'hidden field', 'name_pl': 'hidden field', 'name_pt': 'hidden field', 'name_ru': 'hidden field', 'name_sv': 'hidden field', 'name_tr': 'hidden field', 'name_vi': 'inline label - always visible', 'name_zh': 'hidden field', 'wdid_score': 'hidden field', 'ne_id': 'hidden field', 'name_fa': 'hidden field', 'name_he': 'hidden field', 'name_uk': 'hidden field', 'name_ur': 'hidden field', 'name_zht': 'hidden field', });
lyr_Airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});