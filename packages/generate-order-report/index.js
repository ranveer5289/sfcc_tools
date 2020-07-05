const ocapi = require('@sfcc_tools/ocapi');

async function t() {
    console.log('d');
    const tt = await ocapi.oauth.getBusinessManagerGrant();
    console.log(tt);
    console.log('ds');
    const notes = await ocapi.orders.getNotes('https://production-global-iic.demandware.net/s/IntersportAT/dw/shop/v20_3/orders/IAT0000900157710/notes', tt);
    console.log(notes.data.notes.length);
}

t();
