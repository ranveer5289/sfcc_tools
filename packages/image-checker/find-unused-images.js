const catalogImageHelper = require('./helpers/collectImagesFromCatalog');
const findUnUsedImages = require('./helpers/findUnUsedImages');

async function collect() {
    try {
        const catalogImages = await catalogImageHelper.getImages({
            catalogXMLPath: '../sfcc-catalog-to-elasticsearch/vd-all.xml'
            // catalogXMLPath: './iic-catalog.xml'
        });

        if (catalogImages) {
            await findUnUsedImages.findImages({
                serverImageFileXMLPath: './sfcc-vd-v5.xml',
                // serverImageFileXMLPath: './sfcc-vd-min.xml',
                outputPath: './images-not-in-used.csv',
                // imagesInCatalog: catalogImages || {}
                catalogImages: catalogImages
            });
        }
    } catch (error) {
        console.log(error);
    }
}

collect();
