const XmlStream = require('xml-stream');
const fs = require('fs');

const orderXML = './orders_all.xml';

const orderToNotesMapping = {};
let noteCount = 0;
let count = 0;
async function parse() {
    const stream = fs.createReadStream(orderXML);
    const xml = new XmlStream(stream);
    xml.preserve('order');

    xml.on('endElement: notes', function (item) {
        if (item.$children && item.$children.length > 0) {
            noteCount = item.$children.length;
        }
    });

    xml.on('endElement: order', function (item) {
        count += 1;
        if (noteCount > 10) {
            orderToNotesMapping[item.$['order-no']] = noteCount;
            noteCount = 0;
        }
    });

    xml.on('end', async function () {
        console.log(JSON.stringify(orderToNotesMapping));
        console.log(`Total orders processed ${count}`);
    });
}

parse();
