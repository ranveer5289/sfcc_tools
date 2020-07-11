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
                serverImageFileXMLPath: './sfcc-vd-v7-images-productImages.xml',
                // serverImageFileXMLPath: './sfcc-vd-min.xml',
                outputPath: './output/images-not-in-used.csv',
                // imagesInCatalog: catalogImages || {}
                catalogImages: catalogImages
            });
        }
    } catch (error) {
        console.log(error);
    }
}

collect();
