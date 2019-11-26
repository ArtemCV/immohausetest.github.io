var mymap = L.map('mapid',{ zoomControl: false }).setView([51.505, -0.09], 50);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);


// var customOptions =
// {
    
//     'width': '284',
//     'height': '10',
//     'className': 'popupCustom'
// }

var centerMarker = L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup(getAppartmentCart()).openPopup();

var icon = centerMarker.options.icon;
icon.options.iconSize = [76, 100];
centerMarker.setIcon(icon);
//alert("getAppartmentCart()");
// alert(getAppartmentCart());
// $('.leaflet-control-layers').hide();

function getAppartmentCart() {
    return ` <div class="appartment-cart">
    <img src="/img/cart-1.jpg" width="284" height="230" alt="">
    <div class="appartment-cart__decripiton">
        <div class="appartment-cart-wrapper">
            <div class="appartment-cart__decripiton-left">
                <p class="appartment-cart__adress">Романов пер.5</p>
                <p class="appartment-cart__count-room">Комнат:6</p>
                <p class="appartment-cart__square">S: 350 м2</p>
            </div>
            <div class="appartment-cart__decripiton-right">
                <p class="appartment-cart__decripiton-id">ID:68465</p>
                <p class="appartment-cart__decripiton-cost">980000 ₽</p>
                <p class="appartment-cart__decripiton-discount">875000 ₽</p>
            </div>
        </div>
    </div>
</div>`
}