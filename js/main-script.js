 // Declare layers with the different map views:
 var map = L.map("map", { fullscreenControl: true }).setView(
    [57.74, 11.94],
    12
  );
  map.zoomControl.setPosition("topright");

  var osmMap = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map);

  var MtbMap = L.tileLayer(
    "http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS',
    }
  );

  var CyclOSM = L.tileLayer(
    "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    {
      maxZoom: 20,
      attribution:
        '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  var Esri_WorldStreetMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
    }
  );

  var Esri_WorldImagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  );

  var opnv = new L.tileLayer(
    "http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png",
    {
      minZoom: 3,
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="http://memomaps.de/">ÖPNV Karte</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }
  );

  var OpenTopoMap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }
  );

  var Esri_WorldTopoMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",
    }
  );

  var Esri_NatGeoWorldMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",
      maxZoom: 16,
    }
  );

  var USGS_USImagery = L.tileLayer(
    "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 20,
      attribution:
        'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
    }
  );

  // Base layer for layer control

  L.control.browserPrint().addTo(map);
  L.control.locate().addTo(map);
  L.control.measure({ position: "topleft" }).addTo(map);
  L.control.scale().addTo(map);
  //   map.on("mousemove", function (e) {
  //     $(".coordinate").html("Lat:" + e.latlng.lat + "  Long:" + e.latlng.lng);
  //     var latlng = e.latlng;
  //     var coordinatesString =
  //       "Latitude, Longitude: " +
  //       latlng.lat.toFixed(6) +
  //       ", " +
  //       latlng.lng.toFixed(6);
  //     coordinatesElement.textContent = coordinatesString;
  //   });

  var baseLayers = {
    StreetMap: osmMap,

    CycleMap: CyclOSM,
    MtbMap: MtbMap,

    "Public Transport": opnv,
    OsmTopoMap: OpenTopoMap,
    EsriWorldStreet: Esri_WorldStreetMap,
    EsriWorldImagery: Esri_WorldImagery,
    EsriWorldTopoMap: Esri_WorldTopoMap,
    EsriNatGeoMap: Esri_NatGeoWorldMap,
    googleStreets: L.tileLayer(
      "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    ),
    googleSat: L.tileLayer(
      "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    ),
    googleHybrid: L.tileLayer(
      "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    ),
    googleTerrain: L.tileLayer(
      "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    ),
    StamenWatercolor: L.tileLayer(
      "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
      {
        attribution:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abcd",
        minZoom: 1,
        maxZoom: 16,
        ext: "jpg",
      }
    ),
    StamenTerrain: L.tileLayer(
      "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}",
      {
        attribution:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abcd",
        minZoom: 0,
        maxZoom: 18,
        ext: "png",
      }
    ),
    // "USGSWorldImagery": USGS_USImagerylWorld,
    // "NasaBrightMap":NASAGIBS_ViirsEarthAtNight2012Maps,
  };

  var OpenSeaMap = L.tileLayer(
    "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",
    {
      attribution:
        'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors',
    }
  );
  var overlayLayers = {
    OpenSeaMap: OpenSeaMap,
  };

  // Switcher for the different map layers
  // L.Control.Measure(options).addTo(map);
  L.control.layers(baseLayers, overlayLayers).addTo(map);

  //     L.Routing.control({
  //     waypoints: [
  //         L.latLng(57.74, 11.94),
  //         L.latLng(57.6792, 11.949)
  //     ],
  //     routeWhileDragging: true,
  //     geocoder: L.Control.Geocoder.nominatim(),
  //     lineOptions: { styles: [ {color: 'magenta', opacity: 1, weight: 5}]}
  // }).addTo(map);

  function createButton(label, container) {
    var btn = L.DomUtil.create("button", "", container);
    btn.setAttribute("type", "button");
    btn.innerHTML = label;
    return btn;
  }

  map.on("click", function (e) {
    var container = L.DomUtil.create("div"),
      startBtn = createButton("Start from here", container),
      destBtn = createButton("Go to this point", container);

    L.popup().setContent(container).setLatLng(e.latlng).openOn(map);

    L.DomEvent.on(startBtn, "click", function () {
      control.spliceWaypoints(0, 1, e.latlng);
      map.closePopup();
    });

    L.DomEvent.on(destBtn, "click", function () {
      control.spliceWaypoints(
        control.getWaypoints().length - 1,
        1,
        e.latlng
      );
      map.closePopup();
    });
  });

  var ReversablePlan = L.Routing.Plan.extend({
    createGeocoders: function () {
      var container = L.Routing.Plan.prototype.createGeocoders.call(this),
        reverseButton = createButton("↑↓", container);
      return container;
    },
  });

  var plan = new ReversablePlan(
      [L.latLng(51.464275, -0.093384), L.latLng(51.217207, 0.98877)],
      {
        geocoder: L.Control.Geocoder.nominatim(),
        routeWhileDragging: true,
      }
    ),
    control = L.Routing.control({
      routeWhileDragging: true,
      lineOptions: { styles: [{ color: "green", opacity: 1, weight: 5 }] },
      plan: plan,
    }).addTo(map);

  L.Routing.errorControl(control).addTo(map);
  // var btn = document.getElementsByClassName('print-map')
  // btn.addTo(map);
  $(".print-map").click(function () {
    window.print();
  });

  // Create a custom control to display coordinates on mouse hover
  var coordinatesControl = L.Control.extend({
    options: {
      position: "bottomright",
    },

    onAdd: function (map) {
      var container = L.DomUtil.get("coordinates");
      return container;
    },
  });

  // Add the custom control to the map
  map.addControl(new coordinatesControl());

  // Update coordinates on mousemove
  map.on("mousemove", function (e) {
    var lat = e.latlng.lat.toFixed(6);
    var lng = e.latlng.lng.toFixed(6);
    document.getElementById("coordinates").innerHTML =
      "Lat: " + lat + ", Lng: " + lng;
  });

  build = L.easyButton(
    "fa-home fa-lg",
    function () {
      osmb = new OSMBuildings(map).load(
        "https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json"
      );
    },
    "Show 2.5D Buildings",
    "topleft"
  ).addTo(map);