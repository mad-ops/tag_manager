//----------------------------------------------------------------------------
//
//  $Id: PreviewAndPrintLabel.js 16051 2011-09-14 12:43:34Z iozerov $ 
//
// Project -------------------------------------------------------------------
//
//  DYMO Label Framework
//
// Content -------------------------------------------------------------------
//
//  DYMO Label Framework JavaScript Library Samples: Preview and Print label
//
//----------------------------------------------------------------------------
//
//  Copyright (c), 2010, Sanford, L.P. All Rights Reserved.
//
//----------------------------------------------------------------------------

function getLabelXml(tagArray) {
            if (tagArray === undefined || tagArray === null) {
                var tagArray = [{ tagIdSelector: "----", tagFront2: "----", tagFront3: "----", tagBack1: "----", tagBack2: "----", tagBack3: "----" }, { tagIdSelector: "----", tagFront2: "----", tagFront3: "----", tagBack1: "----", tagBack2: "----", tagBack3: "----" }]
            }

            var labelXml = '<?xml version="1.0" encoding="utf-8"?>\
                            <DieCutLabel Version="8.0" Units="twips">\
                                <PaperOrientation>Portrait</PaperOrientation>\
                                <Id>Jewelry30299</Id>\
                                <IsOutlined>false</IsOutlined>\
                                <PaperName>30299 Jewelry Label - offset</PaperName>\
                                <DrawCommands>\
                                    <Path>\
                                        <FillMode>EvenOdd</FillMode>\
                                        <Line X1="90" Y1="0" X2="990" Y2="0" />\
                                        <Arc CenterX="990" CenterY="90" Radius="90" StartAngle="90" EndAngle="0" />\
                                        <LineTo X="1080" Y="180" />\
                                        <LineTo X="1980" Y="180" />\
                                        <LineTo X="1980" Y="90" />\
                                        <Arc CenterX="2070" CenterY="90" Radius="90" StartAngle="180" EndAngle="90" />\
                                        <LineTo X="2970" Y="0" />\
                                        <Arc CenterX="2970" CenterY="90" Radius="90" StartAngle="90" EndAngle="0" />\
                                        <LineTo X="3060" Y="540" />\
                                        <Arc CenterX="2970" CenterY="540" Radius="90" StartAngle="0" EndAngle="-90" />\
                                        <LineTo X="2070" Y="630" />\
                                        <Arc CenterX="2070" CenterY="540" Radius="90" StartAngle="-90" EndAngle="-180" />\
                                        <LineTo X="1980" Y="450" />\
                                        <LineTo X="1080" Y="450" />\
                                        <LineTo X="1080" Y="540" />\
                                        <Arc CenterX="990" CenterY="540" Radius="90" StartAngle="0" EndAngle="-90" />\
                                        <LineTo X="90" Y="630" />\
                                        <Arc CenterX="90" CenterY="540" Radius="90" StartAngle="-90" EndAngle="-180" />\
                                        <LineTo X="0" Y="90" />\
                                        <Arc CenterX="90" CenterY="90" Radius="90" StartAngle="180" EndAngle="90" />\
                                    </Path>\
                                    <Path>\
                                        <FillMode>EvenOdd</FillMode>\
                                        <Line X1="90" Y1="630" X2="990" Y2="630" />\
                                        <Arc CenterX="990" CenterY="720" Radius="90" StartAngle="90" EndAngle="0" />\
                                        <LineTo X="1080" Y="810" />\
                                        <LineTo X="1980" Y="810" />\
                                        <LineTo X="1980" Y="720" />\
                                        <Arc CenterX="2070" CenterY="720" Radius="90" StartAngle="180" EndAngle="90" />\
                                        <LineTo X="2970" Y="630" />\
                                        <Arc CenterX="2970" CenterY="720" Radius="90" StartAngle="90" EndAngle="0" />\
                                        <LineTo X="3060" Y="1170" />\
                                        <Arc CenterX="2970" CenterY="1170" Radius="90" StartAngle="0" EndAngle="-90" />\
                                        <LineTo X="2070" Y="1260" />\
                                        <Arc CenterX="2070" CenterY="1170" Radius="90" StartAngle="-90" EndAngle="-180" />\
                                        <LineTo X="1980" Y="1080" />\
                                        <LineTo X="1080" Y="1080" />\
                                        <LineTo X="1080" Y="1170" />\
                                        <Arc CenterX="990" CenterY="1170" Radius="90" StartAngle="0" EndAngle="-90" />\
                                        <LineTo X="90" Y="1260" />\
                                        <Arc CenterX="90" CenterY="1170" Radius="90" StartAngle="-90" EndAngle="-180" />\
                                        <LineTo X="0" Y="720" />\
                                        <Arc CenterX="90" CenterY="720" Radius="90" StartAngle="180" EndAngle="90" />\
                                    </Path>\
                                </DrawCommands>\
                                <ObjectInfo>\
                                    <TextObject>\
                                        <Name>FrontT1</Name>\
                                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                                        <LinkedObjectName />\
                                        <Rotation>Rotation0</Rotation>\
                                        <IsMirrored>False</IsMirrored>\
                                        <IsVariable>False</IsVariable>\
                                        <GroupID>-1</GroupID>\
                                        <IsOutlined>False</IsOutlined>\
                                        <HorizontalAlignment>Left</HorizontalAlignment>\
                                        <VerticalAlignment>Middle</VerticalAlignment>\
                                        <TextFitMode>ShrinkToFit</TextFitMode>\
                                        <UseFullFontHeight>True</UseFullFontHeight>\
                                        <Verticalized>False</Verticalized>\
                                        <StyledText>\
                                            <Element>\
                                                <String xml:space="preserve">' +
                tagArray[0]['tagIdSelector'] + '\n' +
                tagArray[0]['tagFront2'] + '\n' +
                tagArray[0]['tagFront3'] +
                '</String>\
                                                <Attributes>\
                                                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                                                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                                                </Attributes>\
                                            </Element>\
                                        </StyledText>\
                                    </TextObject>\
                                    <Bounds X="57.5999984741211" Y="86.4000015258789" Width="970.225989300271" Height="486.208694126295" />\
                                </ObjectInfo>\
                                <ObjectInfo>\
                                    <TextObject>\
                                        <Name>TEXT_1</Name>\
                                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                                        <LinkedObjectName />\
                                        <Rotation>Rotation0</Rotation>\
                                        <IsMirrored>False</IsMirrored>\
                                        <IsVariable>False</IsVariable>\
                                        <GroupID>-1</GroupID>\
                                        <IsOutlined>False</IsOutlined>\
                                        <HorizontalAlignment>Left</HorizontalAlignment>\
                                        <VerticalAlignment>Top</VerticalAlignment>\
                                        <TextFitMode>ShrinkToFit</TextFitMode>\
                                        <UseFullFontHeight>True</UseFullFontHeight>\
                                        <Verticalized>False</Verticalized>\
                                        <StyledText />\
                                    </TextObject>\
                                    <Bounds X="2029.7739115176" Y="86.4000015258789" Width="970.225989300271" Height="486.208694126295" />\
                                </ObjectInfo>\
                                <ObjectInfo>\
                                    <TextObject>\
                                        <Name>BackT1</Name>\
                                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                                        <LinkedObjectName />\
                                        <Rotation>Rotation0</Rotation>\
                                        <IsMirrored>False</IsMirrored>\
                                        <IsVariable>False</IsVariable>\
                                        <GroupID>-1</GroupID>\
                                        <IsOutlined>False</IsOutlined>\
                                        <HorizontalAlignment>Left</HorizontalAlignment>\
                                        <VerticalAlignment>Middle</VerticalAlignment>\
                                        <TextFitMode>ShrinkToFit</TextFitMode>\
                                        <UseFullFontHeight>True</UseFullFontHeight>\
                                        <Verticalized>False</Verticalized>\
                                        <StyledText>\
                                            <Element>\
                                                <String xml:space="preserve">' +
                tagArray[0]['tagBack1'] + '\n' +
                tagArray[0]['tagBack2'] + '\n' +
                tagArray[0]['tagBack3'] +
                '</String>\
                                                <Attributes>\
                                                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                                                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                                                </Attributes>\
                                            </Element>\
                                        </StyledText>\
                                    </TextObject>\
                                    <Bounds X="2029.7739115176" Y="86.4000015258789" Width="970.225989300271" Height="486.208694126295" />\
                                </ObjectInfo>\
                                <ObjectInfo>\
                                    <TextObject>\
                                        <Name>FrontT_1</Name>\
                                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                                        <LinkedObjectName />\
                                        <Rotation>Rotation0</Rotation>\
                                        <IsMirrored>False</IsMirrored>\
                                        <IsVariable>False</IsVariable>\
                                        <GroupID>-1</GroupID>\
                                        <IsOutlined>False</IsOutlined>\
                                        <HorizontalAlignment>Left</HorizontalAlignment>\
                                        <VerticalAlignment>Middle</VerticalAlignment>\
                                        <TextFitMode>ShrinkToFit</TextFitMode>\
                                        <UseFullFontHeight>True</UseFullFontHeight>\
                                        <Verticalized>False</Verticalized>\
                                        <StyledText>\
                                            <Element>\
                                                <String xml:space="preserve">' +
                tagArray[1]['tagIdSelector'] + '\n' +
                tagArray[1]['tagFront2'] + '\n' +
                tagArray[1]['tagFront3'] +
                '</String>\
                                                <Attributes>\
                                                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                                                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                                                </Attributes>\
                                            </Element>\
                                        </StyledText>\
                                    </TextObject>\
                                    <Bounds X="57.5999984741211" Y="713.269543855085" Width="970.225989300271" Height="462.730433256731" />\
                                </ObjectInfo>\
                                <ObjectInfo>\
                                    <TextObject>\
                                        <Name>FrontT__1</Name>\
                                        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                                        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                                        <LinkedObjectName />\
                                        <Rotation>Rotation0</Rotation>\
                                        <IsMirrored>False</IsMirrored>\
                                        <IsVariable>False</IsVariable>\
                                        <GroupID>-1</GroupID>\
                                        <IsOutlined>False</IsOutlined>\
                                        <HorizontalAlignment>Left</HorizontalAlignment>\
                                        <VerticalAlignment>Middle</VerticalAlignment>\
                                        <TextFitMode>ShrinkToFit</TextFitMode>\
                                        <UseFullFontHeight>True</UseFullFontHeight>\
                                        <Verticalized>False</Verticalized>\
                                        <StyledText>\
                                            <Element>\
                                                <String xml:space="preserve">' +
                tagArray[1]['tagBack1'] + '\n' +
                tagArray[1]['tagBack2'] + '\n' +
                tagArray[1]['tagBack3'] +
                '</String>\
                                                <Attributes>\
                                                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                                                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />\
                                                </Attributes>\
                                            </Element>\
                                        </StyledText>\
                                    </TextObject>\
                                    <Bounds X="2029.7739115176" Y="713.269543855085" Width="970.225989300271" Height="462.730433256731" />\
                                </ObjectInfo>\
                            </DieCutLabel>';
            return labelXml;
        }
        // Generates label preview and updates corresponend <img> element
        // Note: this does not work in IE 6 & 7 because they don't support data urls
        // if you want previews in IE 6 & 7 you have to do it on the server side
        function updatePreview(label) {
            if (!label)
                return;

            var pngData = label.render();

            var labelImage = document.getElementById('labelImage');
            labelImage.src = "data:image/png;base64," + pngData;
        }

(function() {
    // stores loaded label info
    var label;

    // called when the document completly loaded
    function onload() {
        var labelFile = document.getElementById('labelFile');
        var printersSelect = document.getElementById('printersSelect');
        var printButton = document.getElementById('printButton');
        // const myParam = urlParams.get('myParam');

        label = dymo.label.framework.openLabelXml(getLabelXml());
        // check that label has an address object

        updatePreview(label);
        printButton.disabled = false;

        // loads all supported printers into a combo box 
        function loadPrinters() {
            var printers = dymo.label.framework.getPrinters();
            if (printers.length == 0) {
                console.log("No DYMO printers are installed. Install DYMO printers.");
                return;
            }

            for (var i = 0; i < printers.length; i++) {
                var printerName = printers[i].name;

                var option = document.createElement('option');
                option.value = printerName;
                option.appendChild(document.createTextNode(printerName));
                printersSelect.appendChild(option);
            }
        }


        // load printers list on startup
        loadPrinters();
    };

    // register onload event
    if (window.addEventListener)
        window.addEventListener("load", onload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", onload);
    else
        window.onload = onload;

}());