/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
import { fragment } from 'xmlbuilder2';

// eslint-disable-next-line import/no-named-default
import { default as namespaces } from './namespaces';
import {
  rgbToHex,
  hslToHex,
  hslRegex,
  rgbRegex,
  hexRegex,
  hex3Regex,
  hex3ToHex,
} from '../utils/color-conversion';
import {
  pixelToEMU,
  pixelRegex,
  TWIPToEMU,
  percentageRegex,
  pointRegex,
  pointToHIP,
  HIPToTWIP,
  pointToTWIP,
  pixelToHIP,
  pixelToTWIP,
} from '../utils/unit-conversion';

const isVNode = require('virtual-dom/vnode/is-vnode');
const isVText = require('virtual-dom/vnode/is-vtext');
const colorNames = require('color-name');

const buildTableRowHeight = (tableRowHeight) => {
  const tableRowHeightFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'trHeight')
    .att('@w', 'val', tableRowHeight)
    .att('@w', 'hRule', 'atLeast')
    .up();

  return tableRowHeightFragment;
};

const buildVerticalAlignment = (verticalAlignment) => {
  const vAlignEquivalentValue = verticalAlignment === 'middle' ? 'center' : 'both';

  const verticalAlignmentFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'vAlign')
    .att('@w', 'val', vAlignEquivalentValue)
    .up();

  return verticalAlignmentFragment;
};

const buildColor = (colorCode) => {
  const colorFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'color')
    .att('@w', 'val', colorCode)
    .up();

  return colorFragment;
};

const buildFontSize = (fontSize) => {
  const fontSizeFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'sz')
    .att('@w', 'val', fontSize)
    .up();

  return fontSizeFragment;
};

const buildShading = (colorCode) => {
  const shadingFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'shd')
    .att('@w', 'val', 'clear')
    .att('@w', 'fill', colorCode)
    .up();

  return shadingFragment;
};

const buildHighlight = (color = 'yellow') => {
  const highlightFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'highlight')
    .att('@w', 'val', color)
    .up();

  return highlightFragment;
};

const buildVertAlign = (type = 'subscript') => {
  const vertAlignFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'vertAlign')
    .att('@w', 'val', type)
    .up();

  return vertAlignFragment;
};

const buildStrike = () => {
  const strikeFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'strike')
    .att('@w', 'val', true)
    .up();

  return strikeFragment;
};

const buildBold = () => {
  const boldFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'b')
    .up();

  return boldFragment;
};

const buildItalics = () => {
  const italicsFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'i')
    .up();

  return italicsFragment;
};

const buildUnderline = (type = 'single') => {
  const underlineFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'u')
    .att('@w', 'val', type)
    .up();

  return underlineFragment;
};

const buildLineBreak = (type = 'textWrapping') => {
  const lineBreakFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'br')
    .att('@w', 'type', type)
    .up();

  return lineBreakFragment;
};

const buildInsideVBorder = () => {
  const insideVBorderFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'insideV')
    .att('@w', 'val', 'single')
    .att('@w', 'sz', '4')
    .att('@w', 'space', '0')
    .att('@w', 'color', 'auto')
    .up();

  return insideVBorderFragment;
};

const buildInsideHBorder = () => {
  const insideHBorderFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'insideH')
    .att('@w', 'val', 'single')
    .att('@w', 'sz', '4')
    .att('@w', 'space', '0')
    .att('@w', 'color', 'auto')
    .up();

  return insideHBorderFragment;
};

const buildRightBorder = () => {
  const rightBorderFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'right')
    .att('@w', 'val', 'single')
    .att('@w', 'sz', '4')
    .att('@w', 'space', '0')
    .att('@w', 'color', 'auto')
    .up();

  return rightBorderFragment;
};

const buildBottomBorder = () => {
  const bottomBorderFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'bottom')
    .att('@w', 'val', 'single')
    .att('@w', 'sz', '4')
    .att('@w', 'space', '0')
    .att('@w', 'color', 'auto')
    .up();

  return bottomBorderFragment;
};

const buildLeftBorder = () => {
  const leftBorderFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'left')
    .att('@w', 'val', 'single')
    .att('@w', 'sz', '4')
    .att('@w', 'space', '0')
    .att('@w', 'color', 'auto')
    .up();

  return leftBorderFragment;
};

const buildTopBorder = () => {
  const topBorderFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'top')
    .att('@w', 'val', 'single')
    .att('@w', 'sz', '4')
    .att('@w', 'space', '0')
    .att('@w', 'color', 'auto')
    .up();

  return topBorderFragment;
};

const buildTextElement = (text) => {
  const textFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 't')
    .att('@xml', 'space', 'preserve')
    .txt(text)
    .up();

  return textFragment;
};

const buildRunProperties = (attributes) => {
  const runPropertiesFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'rPr');
  if (attributes && attributes.constructor === Object) {
    Object.keys(attributes).forEach((key) => {
      // eslint-disable-next-line default-case
      switch (key) {
        case 'strong':
          const boldFragment = buildBold();
          runPropertiesFragment.import(boldFragment);
          break;
        case 'i':
          const italicsFragment = buildItalics();
          runPropertiesFragment.import(italicsFragment);
          break;
        case 'u':
          const underlineFragment = buildUnderline();
          runPropertiesFragment.import(underlineFragment);
          break;
        case 'color':
          const colorFragment = buildColor(attributes[key]);
          runPropertiesFragment.import(colorFragment);
          break;
        case 'backgroundColor':
          const shadingFragment = buildShading(attributes[key]);
          runPropertiesFragment.import(shadingFragment);
          break;
        case 'fontSize':
          const fontSizeFragment = buildFontSize(attributes[key]);
          runPropertiesFragment.import(fontSizeFragment);
          break;
      }
    });
  }
  runPropertiesFragment.up();

  return runPropertiesFragment;
};

// eslint-disable-next-line consistent-return
const buildTextFormatting = (vNode) => {
  // eslint-disable-next-line default-case
  switch (vNode.tagName) {
    case 'strong':
    case 'b':
      const boldFragment = buildBold();
      return boldFragment;
    case 'em':
    case 'i':
      const italicsFragment = buildItalics();
      return italicsFragment;
    case 'ins':
    case 'u':
      const underlineFragment = buildUnderline();
      return underlineFragment;
    case 'strike':
    case 'del':
    case 's':
      const strikeFragment = buildStrike();
      return strikeFragment;
    case 'sub':
      const subscriptFragment = buildVertAlign('subscript');
      return subscriptFragment;
    case 'sup':
      const superscriptFragment = buildVertAlign('subscript');
      return superscriptFragment;
    case 'mark':
      const highlightFragment = buildHighlight();
      return highlightFragment;
  }
};

const buildRun = (vNode, attributes) => {
  const runFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'r');
  const runPropertiesFragment = buildRunProperties(attributes);
  if (isVNode(vNode)) {
    while (
      isVNode(vNode) &&
      ['strong', 'b', 'em', 'i', 'u', 'ins', 'strike', 'del', 's', 'sub', 'sup', 'mark'].includes(
        vNode.tagName
      )
    ) {
      const formattingFragment = buildTextFormatting(vNode);
      runPropertiesFragment.import(formattingFragment);
      if (vNode.children.length === 1) {
        // eslint-disable-next-line no-param-reassign, prefer-destructuring
        vNode = vNode.children[0];
      } else {
        // FIXME: Multiple formatting children nodes under single formatting parent node.
        for (let index = 0; index < vNode.children.length; index++) {
          const childVNode = vNode.children[index];
          if (
            isVNode(childVNode) &&
            [
              'strong',
              'b',
              'em',
              'i',
              'u',
              'ins',
              'strike',
              'del',
              's',
              'sub',
              'sup',
              'mark',
            ].includes(childVNode.tagName)
          ) {
            // eslint-disable-next-line no-param-reassign
            vNode = childVNode;
          }
        }
      }
    }
  }
  runFragment.import(runPropertiesFragment);
  if (isVText(vNode)) {
    const textFragment = buildTextElement(vNode.text);
    runFragment.import(textFragment);
  } else if (attributes && attributes.type === 'picture') {
    const { type, inlineOrAnchored, ...otherAttributes } = attributes;
    // eslint-disable-next-line no-use-before-define
    const imageFragment = buildDrawing(inlineOrAnchored, type, otherAttributes);
    runFragment.import(imageFragment);
  } else if (isVNode(vNode) && vNode.tagName === 'br') {
    const lineBreakFragment = buildLineBreak();
    runFragment.import(lineBreakFragment);
  }
  runFragment.up();

  return runFragment;
};

// eslint-disable-next-line consistent-return
const fixupColorCode = (colorCodeString) => {
  if (Object.prototype.hasOwnProperty.call(colorNames, colorCodeString.toLowerCase())) {
    const [red, green, blue] = colorNames[colorCodeString.toLowerCase()];

    return rgbToHex(red, green, blue);
  } else if (rgbRegex.test(colorCodeString)) {
    const matchedParts = colorCodeString.match(rgbRegex);
    const red = matchedParts[1];
    const green = matchedParts[2];
    const blue = matchedParts[3];

    return rgbToHex(red, green, blue);
  } else if (hslRegex.test(colorCodeString)) {
    const matchedParts = colorCodeString.match(hslRegex);
    const hue = matchedParts[1];
    const saturation = matchedParts[2];
    const luminosity = matchedParts[3];

    return hslToHex(hue, saturation, luminosity);
  } else if (hexRegex.test(colorCodeString)) {
    const matchedParts = colorCodeString.match(hexRegex);

    return matchedParts[1];
  } else if (hex3Regex.test(colorCodeString)) {
    const matchedParts = colorCodeString.match(hex3Regex);
    const red = matchedParts[1];
    const green = matchedParts[2];
    const blue = matchedParts[3];

    return hex3ToHex(red, green, blue);
  }
};

// eslint-disable-next-line consistent-return
const fixupLineHeight = (lineHeight, fontSize) => {
  // FIXME: If line height is anything other than a number
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(lineHeight)) {
    if (fontSize) {
      const actualLineHeight = +lineHeight * fontSize;

      return HIPToTWIP(actualLineHeight);
    } else {
      // 240 TWIP or 12 point is default line height
      return +lineHeight * 240;
    }
  } else {
    // 240 TWIP or 12 point is default line height
    return 240;
  }
};

// eslint-disable-next-line consistent-return
const fixupFontSize = (fontSizeString) => {
  if (pointRegex.test(fontSizeString)) {
    const matchedParts = fontSizeString.match(pointRegex);
    // convert point to half point
    return pointToHIP(matchedParts[1]);
  } else if (pixelRegex.test(fontSizeString)) {
    const matchedParts = fontSizeString.match(pixelRegex);
    // convert pixels to half point
    return pixelToHIP(matchedParts[1]);
  }
};

// eslint-disable-next-line consistent-return
const fixupRowHeight = (rowHeightString) => {
  if (pointRegex.test(rowHeightString)) {
    const matchedParts = rowHeightString.match(pointRegex);
    // convert point to half point
    return pointToTWIP(matchedParts[1]);
  } else if (pixelRegex.test(rowHeightString)) {
    const matchedParts = rowHeightString.match(pixelRegex);
    // convert pixels to half point
    return pixelToTWIP(matchedParts[1]);
  }
};

const buildRunOrRuns = (vNode, attributes) => {
  if (isVNode(vNode) && vNode.tagName === 'span') {
    const runFragments = [];

    for (let index = 0; index < vNode.children.length; index++) {
      const childVNode = vNode.children[index];
      const modifiedAttributes = { ...attributes };
      if (isVNode(vNode) && vNode.properties && vNode.properties.style) {
        if (
          vNode.properties.style.color &&
          !['transparent', 'auto'].includes(vNode.properties.style.color)
        ) {
          modifiedAttributes.color = fixupColorCode(vNode.properties.style.color);
        }
        if (
          vNode.properties.style['background-color'] &&
          !['transparent', 'auto'].includes(vNode.properties.style['background-color'])
        ) {
          modifiedAttributes.backgroundColor = fixupColorCode(
            vNode.properties.style['background-color']
          );
        }
        if (vNode.properties.style['font-size']) {
          modifiedAttributes.fontSize = fixupFontSize(vNode.properties.style['font-size']);
        }
      }
      runFragments.push(buildRun(childVNode, modifiedAttributes));
    }

    return runFragments;
  } else {
    const runFragment = buildRun(vNode, attributes);

    return runFragment;
  }
};

const buildRunOrHyperLink = (vNode, attributes, docxDocumentInstance) => {
  if (isVNode(vNode) && vNode.tagName === 'a') {
    const relationshipId = docxDocumentInstance.createDocumentRelationships(
      'hyperlink',
      vNode.properties && vNode.properties.href ? vNode.properties.href : ''
    );
    const hyperlinkFragment = fragment({
      namespaceAlias: { w: namespaces.w, r: namespaces.r },
    })
      .ele('@w', 'hyperlink')
      .att('@r', 'id', `rId${relationshipId}`);

    const runFragments = buildRunOrRuns(vNode.children[0], attributes);
    if (Array.isArray(runFragments)) {
      for (let index = 0; index < runFragments.length; index++) {
        const runFragment = runFragments[index];

        hyperlinkFragment.import(runFragment);
      }
    } else {
      hyperlinkFragment.import(runFragments);
    }
    hyperlinkFragment.up();

    return hyperlinkFragment;
  }
  const runFragments = buildRunOrRuns(vNode, attributes);

  return runFragments;
};

const buildNumberingProperties = (levelId, numberingId) => {
  const numberingPropertiesFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'numPr')
    .ele('@w', 'ilvl')
    .att('@w', 'val', String(levelId))
    .up()
    .ele('@w', 'numId')
    .att('@w', 'val', String(numberingId))
    .up()
    .up();

  return numberingPropertiesFragment;
};

const buildNumberingInstances = () => {
  const numberingInstancesFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'num')
    .ele('@w', 'abstractNumId')
    .up()
    .up();

  return numberingInstancesFragment;
};

const buildSpacing = (lineSpacing) => {
  const spacingFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'spacing')
    .att('@w', 'line', lineSpacing)
    .att('@w', 'lineRule', 'exact')
    .up();

  return spacingFragment;
};

const buildIndentation = () => {
  const indentationFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'ind')
    .up();

  return indentationFragment;
};

const buildHorizontalAlignment = (horizontalAlignment) => {
  const horizontalAlignmentFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'jc')
    .att('@w', 'val', horizontalAlignment)
    .up();

  return horizontalAlignmentFragment;
};

const buildParagraphProperties = (attributes) => {
  const paragraphPropertiesFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'pPr');
  if (attributes && attributes.constructor === Object) {
    Object.keys(attributes).forEach((key) => {
      // eslint-disable-next-line default-case
      switch (key) {
        case 'numbering':
          const { levelId, numberingId } = attributes[key];
          const numberingPropertiesFragment = buildNumberingProperties(levelId, numberingId);
          paragraphPropertiesFragment.import(numberingPropertiesFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.numbering;
          break;
        case 'textAlign':
          const horizontalAlignmentFragment = buildHorizontalAlignment(attributes[key]);
          paragraphPropertiesFragment.import(horizontalAlignmentFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.textAlign;
          break;
        case 'lineHeight':
          const spacingFragment = buildSpacing(attributes[key]);
          paragraphPropertiesFragment.import(spacingFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.lineHeight;
          break;
      }
    });
  }
  paragraphPropertiesFragment.up();

  return paragraphPropertiesFragment;
};

const computeImageDimensions = (vNode, attributes) => {
  const { maximumWidth, originalWidth, originalHeight } = attributes;
  const aspectRatio = originalWidth / originalHeight;
  const maximumWidthInEMU = TWIPToEMU(maximumWidth);
  let originalWidthInEMU = pixelToEMU(originalWidth);
  let originalHeightInEMU = pixelToEMU(originalHeight);
  if (originalWidthInEMU > maximumWidthInEMU) {
    originalWidthInEMU = maximumWidthInEMU;
    originalHeightInEMU = Math.round(originalWidthInEMU / aspectRatio);
  }
  let modifiedHeight;
  let modifiedWidth;

  if (vNode.properties && vNode.properties.style) {
    if (vNode.properties.style.width) {
      if (vNode.properties.style.width !== 'auto') {
        if (pixelRegex.test(vNode.properties.style.width)) {
          modifiedWidth = pixelToEMU(vNode.properties.style.width.match(pixelRegex)[1]);
        } else if (percentageRegex.test(vNode.properties.style.width)) {
          const percentageValue = vNode.properties.style.width.match(percentageRegex)[1];

          modifiedWidth = Math.round((percentageValue / 100) * originalWidthInEMU);
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (vNode.properties.style.height && vNode.properties.style.height === 'auto') {
          modifiedWidth = originalWidthInEMU;
          modifiedHeight = originalHeightInEMU;
        }
      }
    }
    if (vNode.properties.style.height) {
      if (vNode.properties.style.height !== 'auto') {
        if (pixelRegex.test(vNode.properties.style.height)) {
          modifiedHeight = pixelToEMU(vNode.properties.style.height.match(pixelRegex)[1]);
        } else if (percentageRegex.test(vNode.properties.style.height)) {
          const percentageValue = vNode.properties.style.width.match(percentageRegex)[1];

          modifiedHeight = Math.round((percentageValue / 100) * originalHeightInEMU);
          if (!modifiedWidth) {
            modifiedWidth = Math.round(modifiedHeight * aspectRatio);
          }
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (modifiedWidth) {
          if (!modifiedHeight) {
            modifiedHeight = Math.round(modifiedWidth / aspectRatio);
          }
        } else {
          modifiedHeight = originalHeightInEMU;
          modifiedWidth = originalWidthInEMU;
        }
      }
    }
    if (modifiedWidth && !modifiedHeight) {
      modifiedHeight = Math.round(modifiedWidth / aspectRatio);
    } else if (modifiedHeight && !modifiedWidth) {
      modifiedWidth = Math.round(modifiedHeight * aspectRatio);
    }
  } else {
    modifiedWidth = originalWidthInEMU;
    modifiedHeight = originalHeightInEMU;
  }

  // eslint-disable-next-line no-param-reassign
  attributes.width = modifiedWidth;
  // eslint-disable-next-line no-param-reassign
  attributes.height = modifiedHeight;
};

const buildParagraph = (vNode, attributes, docxDocumentInstance) => {
  const paragraphFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'p');
  const modifiedAttributes = { ...attributes };
  if (isVNode(vNode) && vNode.properties && vNode.properties.style) {
    if (
      vNode.properties.style.color &&
      !['transparent', 'auto'].includes(vNode.properties.style.color)
    ) {
      modifiedAttributes.color = fixupColorCode(vNode.properties.style.color);
    }
    if (
      vNode.properties.style['background-color'] &&
      !['transparent', 'auto'].includes(vNode.properties.style['background-color'])
    ) {
      modifiedAttributes.backgroundColor = fixupColorCode(
        vNode.properties.style['background-color']
      );
    }
    if (vNode.properties.style['vertical-align']) {
      modifiedAttributes.verticalAlign = vNode.properties.style['vertical-align'];
    }
    if (vNode.properties.style['text-align']) {
      modifiedAttributes.textAlign = vNode.properties.style['text-align'];
    }
    // FIXME: remove bold check when other font weights are handled.
    if (vNode.properties.style['font-weight'] && vNode.properties.style['font-weight'] === 'bold') {
      modifiedAttributes.strong = vNode.properties.style['font-weight'];
    }
    if (vNode.properties.style['font-size']) {
      modifiedAttributes.fontSize = fixupFontSize(vNode.properties.style['font-size']);
    }
    if (vNode.properties.style['line-height']) {
      modifiedAttributes.lineHeight = fixupLineHeight(
        vNode.properties.style['line-height'],
        vNode.properties.style['font-size']
          ? fixupFontSize(vNode.properties.style['font-size'])
          : null
      );
    }
  }
  const paragraphPropertiesFragment = buildParagraphProperties(modifiedAttributes);
  paragraphFragment.import(paragraphPropertiesFragment);
  if (isVNode(vNode) && vNode.children && Array.isArray(vNode.children) && vNode.children.length) {
    for (let index = 0; index < vNode.children.length; index++) {
      const childVNode = vNode.children[index];
      const runOrHyperlinkFragments = buildRunOrHyperLink(
        childVNode,
        modifiedAttributes,
        docxDocumentInstance
      );
      if (Array.isArray(runOrHyperlinkFragments)) {
        for (
          let iteratorIndex = 0;
          iteratorIndex < runOrHyperlinkFragments.length;
          iteratorIndex++
        ) {
          const runOrHyperlinkFragment = runOrHyperlinkFragments[iteratorIndex];

          paragraphFragment.import(runOrHyperlinkFragment);
        }
      } else {
        paragraphFragment.import(runOrHyperlinkFragments);
      }
    }
  } else {
    // In case paragraphs has to be rendered where vText is present. Eg. table-cell
    // Or in case the vNode is something like img
    if (isVNode(vNode) && vNode.tagName === 'img') {
      computeImageDimensions(vNode, modifiedAttributes);
    }
    const runFragments = buildRunOrRuns(vNode, modifiedAttributes);
    if (Array.isArray(runFragments)) {
      for (let index = 0; index < runFragments.length; index++) {
        const runFragment = runFragments[index];

        paragraphFragment.import(runFragment);
      }
    } else {
      paragraphFragment.import(runFragments);
    }
  }
  paragraphFragment.up();

  return paragraphFragment;
};

const buildGridSpanFragment = (spanValue) => {
  const gridSpanFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'gridSpan')
    .att('@w', 'val', spanValue)
    .up();

  return gridSpanFragment;
};

const buildTableCellSpacing = () => {
  const tableCellSpacingFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'tblCellSpacing')
    .att('@w', 'w', '36')
    .att('@w', 'type', 'dxa')
    .up();

  return tableCellSpacingFragment;
};

const buildTableCellBorders = (tableCellBorder) => {
  const tableCellBordersFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'tcBorders');

  if (tableCellBorder.top) {
    const topBorderFragment = buildTopBorder();
    tableCellBordersFragment.import(topBorderFragment);
  }
  if (tableCellBorder.left) {
    const leftBorderFragment = buildLeftBorder();
    tableCellBordersFragment.import(leftBorderFragment);
  }
  if (tableCellBorder.bottom) {
    const bottomBorderFragment = buildBottomBorder();
    tableCellBordersFragment.import(bottomBorderFragment);
  }
  if (tableCellBorder.right) {
    const rightBorderFragment = buildRightBorder();
    tableCellBordersFragment.import(rightBorderFragment);
  }

  tableCellBordersFragment.up();

  return tableCellBordersFragment;
};

const buildTableCellProperties = (attributes) => {
  const tableCellPropertiesFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'tcPr');
  if (attributes && attributes.constructor === Object) {
    Object.keys(attributes).forEach((key) => {
      // eslint-disable-next-line default-case
      switch (key) {
        case 'backgroundColor':
          const shadingFragment = buildShading(attributes[key]);
          tableCellPropertiesFragment.import(shadingFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.backgroundColor;
          break;
        case 'verticalAlign':
          const verticalAlignmentFragment = buildVerticalAlignment(attributes[key]);
          tableCellPropertiesFragment.import(verticalAlignmentFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.verticalAlign;
          break;
        case 'colSpan':
          const gridSpanFragment = buildGridSpanFragment(attributes[key]);
          tableCellPropertiesFragment.import(gridSpanFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.colSpan;
          break;
        case 'tableCellBorder':
          const tableCellBorderFragment = buildTableCellBorders(attributes[key]);
          tableCellPropertiesFragment.import(tableCellBorderFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.tableCellBorder;
          break;
      }
    });
  }
  tableCellPropertiesFragment.up();

  return tableCellPropertiesFragment;
};

const fixupTableCellBorder = (vNode, attributes) => {
  if (vNode.properties.style['border-top'] && vNode.properties.style['border-top'] === '0') {
    attributes.tableCellBorder = {
      ...attributes.tableCellBorder,
      top: 0,
    };
  } else if (vNode.properties.style['border-top'] && vNode.properties.style['border-top'] !== '0') {
    attributes.tableCellBorder = {
      ...attributes.tableCellBorder,
      top: 1,
    };
  }
  if (vNode.properties.style['border-left'] && vNode.properties.style['border-left'] === '0') {
    attributes.tableCellBorder = {
      ...attributes.tableCellBorder,
      left: 0,
    };
  } else if (
    vNode.properties.style['border-left'] &&
    vNode.properties.style['border-left'] !== '0'
  ) {
    attributes.tableCellBorder = {
      ...attributes.tableCellBorder,
      left: 1,
    };
  }
  if (vNode.properties.style['border-bottom'] && vNode.properties.style['border-bottom'] === '0') {
    attributes.tableCellBorder = {
      ...attributes.tableCellBorder,
      bottom: 0,
    };
  } else if (
    vNode.properties.style['border-bottom'] &&
    vNode.properties.style['border-bottom'] !== '0'
  ) {
    attributes.tableCellBorder = {
      ...attributes.tableCellBorder,
      bottom: 1,
    };
  }
  if (vNode.properties.style['border-right'] && vNode.properties.style['border-right'] === '0') {
    attributes.tableCellBorder = {
      ...attributes.tableCellBorder,
      right: 0,
    };
  } else if (
    vNode.properties.style['border-right'] &&
    vNode.properties.style['border-right'] !== '0'
  ) {
    attributes.tableCellBorder = {
      ...attributes.tableCellBorder,
      right: 1,
    };
  }
};

const buildTableCell = (vNode, attributes) => {
  const tableCellFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'tc');
  const modifiedAttributes = { ...attributes };
  if (isVNode(vNode) && vNode.properties) {
    if (
      vNode.properties.colSpan ||
      (vNode.properties.style && vNode.properties.style['column-span'])
    ) {
      modifiedAttributes.colSpan =
        vNode.properties.colSpan ||
        (vNode.properties.style && vNode.properties.style['column-span']);
    }
    if (vNode.properties.style) {
      if (
        vNode.properties.style.color &&
        !['transparent', 'auto'].includes(vNode.properties.style.color)
      ) {
        modifiedAttributes.color = fixupColorCode(vNode.properties.style.color);
      }
      if (
        vNode.properties.style['background-color'] &&
        !['transparent', 'auto'].includes(vNode.properties.style['background-color'])
      ) {
        modifiedAttributes.backgroundColor = fixupColorCode(
          vNode.properties.style['background-color']
        );
      }
      if (vNode.properties.style['vertical-align']) {
        modifiedAttributes.verticalAlign = vNode.properties.style['vertical-align'];
      }
    }
    if (vNode.properties.style) {
      fixupTableCellBorder(vNode, modifiedAttributes);
    }
  }
  const tableCellPropertiesFragment = buildTableCellProperties(modifiedAttributes);
  tableCellFragment.import(tableCellPropertiesFragment);
  if (vNode.children && Array.isArray(vNode.children) && vNode.children.length) {
    for (let index = 0; index < vNode.children.length; index++) {
      const childVNode = vNode.children[index];
      const paragraphFragment = buildParagraph(childVNode, modifiedAttributes);
      tableCellFragment.import(paragraphFragment);
    }
  } else {
    // TODO: Figure out why building with buildParagraph() isn't working
    const paragraphFragment = fragment({
      namespaceAlias: { w: namespaces.w },
    })
      .ele('@w', 'p')
      .up();
    tableCellFragment.import(paragraphFragment);
  }
  tableCellFragment.up();

  return tableCellFragment;
};

const buildTableRowProperties = (attributes) => {
  const tableRowPropertiesFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'trPr');
  if (attributes && attributes.constructor === Object) {
    Object.keys(attributes).forEach((key) => {
      // eslint-disable-next-line default-case
      switch (key) {
        case 'tableRowHeight':
          const tableRowHeightFragment = buildTableRowHeight(attributes[key]);
          tableRowPropertiesFragment.import(tableRowHeightFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.tableRowHeight;
          break;
      }
    });
  }
  tableRowPropertiesFragment.up();

  return tableRowPropertiesFragment;
};

const buildTableRow = (vNode, attributes) => {
  const tableRowFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'tr');
  const modifiedAttributes = { ...attributes };
  if (isVNode(vNode) && vNode.properties) {
    // FIXME: find a better way to get row height from cell style
    if (
      (vNode.properties.style && vNode.properties.style.height) ||
      (vNode.children[0] &&
        isVNode(vNode.children[0]) &&
        vNode.children[0].properties.style &&
        vNode.children[0].properties.style.height)
    ) {
      modifiedAttributes.tableRowHeight = fixupRowHeight(
        (vNode.properties.style && vNode.properties.style.height) ||
          (vNode.children[0] &&
          isVNode(vNode.children[0]) &&
          vNode.children[0].properties.style &&
          vNode.children[0].properties.style.height
            ? vNode.children[0].properties.style.height
            : undefined)
      );
    }
    if (vNode.properties.style) {
      fixupTableCellBorder(vNode, modifiedAttributes);
    }
  }
  const tableRowPropertiesFragment = buildTableRowProperties(modifiedAttributes);
  tableRowFragment.import(tableRowPropertiesFragment);
  if (vNode.children && Array.isArray(vNode.children) && vNode.children.length) {
    for (let index = 0; index < vNode.children.length; index++) {
      const childVNode = vNode.children[index];
      if (['td', 'th'].includes(childVNode.tagName)) {
        const tableCellFragment = buildTableCell(childVNode, modifiedAttributes);
        tableRowFragment.import(tableCellFragment);
      }
    }
  }
  tableRowFragment.up();

  return tableRowFragment;
};

const buildTableGridCol = (gridWidth) => {
  const tableGridColFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'gridCol')
    .att('@w', 'w', String(gridWidth));

  return tableGridColFragment;
};

const buildTableGrid = (vNode, attributes) => {
  const tableGridFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'tblGrid');
  if (vNode.children && Array.isArray(vNode.children) && vNode.children.length) {
    const gridColumns = vNode.children.filter((childVNode) => childVNode.tagName === 'col');
    const gridWidth = attributes.maximumWidth / gridColumns.length;

    for (let index = 0; index < gridColumns.length; index++) {
      const tableGridColFragment = buildTableGridCol(gridWidth);
      tableGridFragment.import(tableGridColFragment);
    }
  }
  tableGridFragment.up();

  return tableGridFragment;
};

const buildTableBorders = (tableBorder) => {
  const tableBordersFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'tblBorders');

  if (tableBorder.top) {
    const topBorderFragment = buildTopBorder();
    tableBordersFragment.import(topBorderFragment);
  }
  if (tableBorder.left) {
    const leftBorderFragment = buildLeftBorder();
    tableBordersFragment.import(leftBorderFragment);
  }
  if (tableBorder.bottom) {
    const bottomBorderFragment = buildBottomBorder();
    tableBordersFragment.import(bottomBorderFragment);
  }
  if (tableBorder.right) {
    const rightBorderFragment = buildRightBorder();
    tableBordersFragment.import(rightBorderFragment);
  }
  if (tableBorder.insideH) {
    const insideHBorderFragment = buildInsideHBorder();
    tableBordersFragment.import(insideHBorderFragment);
  }
  if (tableBorder.insideV) {
    const insideVBorderFragment = buildInsideVBorder();
    tableBordersFragment.import(insideVBorderFragment);
  }

  tableBordersFragment.up();

  return tableBordersFragment;
};

const buildTableWidth = (tableWidth) => {
  const tableWidthFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  })
    .ele('@w', 'tblW')
    .att('@w', 'type', 'dxa')
    .att('@w', 'w', String(tableWidth))
    .up();

  return tableWidthFragment;
};

const buildTableProperties = (attributes) => {
  const tablePropertiesFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'tblPr');

  const tableWidthFragment = buildTableWidth(attributes.maximumWidth);
  tablePropertiesFragment.import(tableWidthFragment);

  if (attributes && attributes.constructor === Object) {
    Object.keys(attributes).forEach((key) => {
      // eslint-disable-next-line default-case
      switch (key) {
        case 'tableBorder':
          const tableBordersFragment = buildTableBorders(attributes[key]);
          tablePropertiesFragment.import(tableBordersFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.border;
          break;
        case 'tableCellSpacing':
          const tableCellSpacingFragment = buildTableCellSpacing();
          tablePropertiesFragment.import(tableCellSpacingFragment);
          // Delete used property
          // eslint-disable-next-line no-param-reassign
          delete attributes.tableCellSpacing;
          break;
      }
    });
  }
  tablePropertiesFragment.up();

  return tablePropertiesFragment;
};

const buildTable = (vNode, attributes) => {
  const tableFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'tbl');
  const modifiedAttributes = { ...attributes };
  if (isVNode(vNode) && vNode.properties) {
    if (
      vNode.properties.border === '0' ||
      (vNode.properties.style && vNode.properties.style.border === 'none') ||
      (!vNode.properties.border && !(vNode.properties.style && vNode.properties.style.border))
    ) {
      modifiedAttributes.tableBorder = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        insideH: 0,
        insideV: 0,
      };
    } else {
      // eslint-disable-next-line no-lonely-if
      if (
        (vNode.properties.style && !vNode.properties.style['border-collapse']) ||
        (vNode.properties.style && vNode.properties.style['border-collapse'] === 'separate')
      ) {
        modifiedAttributes.tableBorder = {
          top: 1,
          left: 1,
          bottom: 1,
          right: 1,
          insideH: 0,
          insideV: 0,
        };
        modifiedAttributes.tableCellBorder = {
          top: 1,
          left: 1,
          bottom: 1,
          right: 1,
        };
        // TODO: Cell spacing has to be defined.
        // value is in TWIPs.
        modifiedAttributes.tableCellSpacing = 36;
      } else if (
        vNode.properties.style &&
        vNode.properties.style['border-collapse'] === 'collapse'
      ) {
        modifiedAttributes.tableBorder = {
          top: 1,
          left: 1,
          bottom: 1,
          right: 1,
          insideH: 1,
          insideV: 1,
        };
      }
    }
  }
  const tablePropertiesFragment = buildTableProperties(modifiedAttributes);
  tableFragment.import(tablePropertiesFragment);
  if (vNode.children && Array.isArray(vNode.children) && vNode.children.length) {
    for (let index = 0; index < vNode.children.length; index++) {
      const childVNode = vNode.children[index];
      if (childVNode.tagName === 'colgroup') {
        const tableGridFragment = buildTableGrid(childVNode, modifiedAttributes);
        tableFragment.import(tableGridFragment);
      } else if (childVNode.tagName === 'thead') {
        for (let iteratorIndex = 0; iteratorIndex < childVNode.children.length; iteratorIndex++) {
          const grandChildVNode = childVNode.children[iteratorIndex];
          if (grandChildVNode.tagName === 'tr') {
            const tableRowFragment = buildTableRow(grandChildVNode, modifiedAttributes);
            tableFragment.import(tableRowFragment);
          }
        }
      } else if (childVNode.tagName === 'tbody') {
        for (let iteratorIndex = 0; iteratorIndex < childVNode.children.length; iteratorIndex++) {
          const grandChildVNode = childVNode.children[iteratorIndex];
          if (grandChildVNode.tagName === 'tr') {
            const tableRowFragment = buildTableRow(grandChildVNode, modifiedAttributes);
            tableFragment.import(tableRowFragment);
          }
        }
      } else if (childVNode.tagName === 'tr') {
        const tableRowFragment = buildTableRow(childVNode, modifiedAttributes);
        tableFragment.import(tableRowFragment);
      }
    }
  }
  tableFragment.up();

  return tableFragment;
};

const buildPresetGeometry = () => {
  const presetGeometryFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  })
    .ele('@a', 'prstGeom')
    .att('prst', 'rect')
    .up();

  return presetGeometryFragment;
};

const buildExtents = ({ width, height }) => {
  const extentsFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  })
    .ele('@a', 'ext')
    .att('cx', width)
    .att('cy', height)
    .up();

  return extentsFragment;
};

const buildOffset = () => {
  const offsetFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  })
    .ele('@a', 'off')
    .att('x', '0')
    .att('y', '0')
    .up();

  return offsetFragment;
};

const buildGraphicFrameTransform = (attributes) => {
  const graphicFrameTransformFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  }).ele('@a', 'xfrm');

  const offsetFragment = buildOffset();
  graphicFrameTransformFragment.import(offsetFragment);
  const extentsFragment = buildExtents(attributes);
  graphicFrameTransformFragment.import(extentsFragment);

  graphicFrameTransformFragment.up();

  return graphicFrameTransformFragment;
};

const buildShapeProperties = (attributes) => {
  const shapeProperties = fragment({
    namespaceAlias: { pic: namespaces.pic },
  }).ele('@pic', 'spPr');

  const graphicFrameTransformFragment = buildGraphicFrameTransform(attributes);
  shapeProperties.import(graphicFrameTransformFragment);
  const presetGeometryFragment = buildPresetGeometry();
  shapeProperties.import(presetGeometryFragment);

  shapeProperties.up();

  return shapeProperties;
};

const buildFillRect = () => {
  const fillRectFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  })
    .ele('@a', 'fillRect')
    .up();

  return fillRectFragment;
};

const buildStretch = () => {
  const stretchFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  }).ele('@a', 'stretch');

  const fillRectFragment = buildFillRect();
  stretchFragment.import(fillRectFragment);

  stretchFragment.up();

  return stretchFragment;
};

const buildSrcRectFragment = () => {
  const srcRectFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  })
    .ele('@a', 'srcRect')
    .att('b', '0')
    .att('l', '0')
    .att('r', '0')
    .att('t', '0')
    .up();

  return srcRectFragment;
};

const buildBinaryLargeImageOrPicture = (relationshipId) => {
  const binaryLargeImageOrPictureFragment = fragment({
    namespaceAlias: { a: namespaces.a, r: namespaces.r },
  })
    .ele('@a', 'blip')
    .att('@r', 'embed', `rId${relationshipId}`)
    // FIXME: possible values 'email', 'none', 'print', 'hqprint', 'screen'
    .att('cstate', 'print');

  binaryLargeImageOrPictureFragment.up();

  return binaryLargeImageOrPictureFragment;
};

const buildBinaryLargeImageOrPictureFill = (relationshipId) => {
  const binaryLargeImageOrPictureFillFragment = fragment({
    namespaceAlias: { pic: namespaces.pic },
  }).ele('@pic', 'blipFill');
  const binaryLargeImageOrPictureFragment = buildBinaryLargeImageOrPicture(relationshipId);
  binaryLargeImageOrPictureFillFragment.import(binaryLargeImageOrPictureFragment);
  const srcRectFragment = buildSrcRectFragment();
  binaryLargeImageOrPictureFillFragment.import(srcRectFragment);
  const stretchFragment = buildStretch();
  binaryLargeImageOrPictureFillFragment.import(stretchFragment);

  binaryLargeImageOrPictureFillFragment.up();

  return binaryLargeImageOrPictureFillFragment;
};

const buildNonVisualPictureDrawingProperties = () => {
  const nonVisualPictureDrawingPropertiesFragment = fragment({
    namespaceAlias: { pic: namespaces.pic },
  }).ele('@pic', 'cNvPicPr');

  nonVisualPictureDrawingPropertiesFragment.up();

  return nonVisualPictureDrawingPropertiesFragment;
};

const buildNonVisualDrawingProperties = (
  pictureId,
  pictureNameWithExtension,
  pictureDescription = ''
) => {
  const nonVisualDrawingPropertiesFragment = fragment({
    namespaceAlias: { pic: namespaces.pic },
  })
    .ele('@pic', 'cNvPr')
    .att('id', pictureId)
    .att('name', pictureNameWithExtension)
    .att('descr', pictureDescription);

  nonVisualDrawingPropertiesFragment.up();

  return nonVisualDrawingPropertiesFragment;
};

const buildNonVisualPictureProperties = (
  pictureId,
  pictureNameWithExtension,
  pictureDescription
) => {
  const nonVisualPicturePropertiesFragment = fragment({
    namespaceAlias: { pic: namespaces.pic },
  }).ele('@pic', 'nvPicPr');
  // TODO: Handle picture attributes
  const nonVisualDrawingPropertiesFragment = buildNonVisualDrawingProperties(
    pictureId,
    pictureNameWithExtension,
    pictureDescription
  );
  nonVisualPicturePropertiesFragment.import(nonVisualDrawingPropertiesFragment);
  const nonVisualPictureDrawingPropertiesFragment = buildNonVisualPictureDrawingProperties();
  nonVisualPicturePropertiesFragment.import(nonVisualPictureDrawingPropertiesFragment);
  nonVisualPicturePropertiesFragment.up();

  return nonVisualPicturePropertiesFragment;
};

const buildPicture = ({
  id,
  fileNameWithExtension,
  description,
  relationshipId,
  width,
  height,
}) => {
  const pictureFragment = fragment({
    namespaceAlias: { pic: namespaces.pic },
  }).ele('@pic', 'pic');
  const nonVisualPicturePropertiesFragment = buildNonVisualPictureProperties(
    id,
    fileNameWithExtension,
    description
  );
  pictureFragment.import(nonVisualPicturePropertiesFragment);
  const binaryLargeImageOrPictureFill = buildBinaryLargeImageOrPictureFill(relationshipId);
  pictureFragment.import(binaryLargeImageOrPictureFill);
  const shapeProperties = buildShapeProperties({ width, height });
  pictureFragment.import(shapeProperties);
  pictureFragment.up();

  return pictureFragment;
};

const buildGraphicData = (graphicType, attributes) => {
  const graphicDataFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  })
    .ele('@a', 'graphicData')
    .att('uri', 'http://schemas.openxmlformats.org/drawingml/2006/picture');
  if (graphicType === 'picture') {
    const pictureFragment = buildPicture(attributes);
    graphicDataFragment.import(pictureFragment);
  }
  graphicDataFragment.up();

  return graphicDataFragment;
};

const buildGraphic = (graphicType, attributes) => {
  const graphicFragment = fragment({
    namespaceAlias: { a: namespaces.a },
  }).ele('@a', 'graphic');
  // TODO: Handle drawing type
  const graphicDataFragment = buildGraphicData(graphicType, attributes);
  graphicFragment.import(graphicDataFragment);
  graphicFragment.up();

  return graphicFragment;
};

const buildDrawingObjectNonVisualProperties = (pictureId, pictureName) => {
  const drawingObjectNonVisualPropertiesFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'docPr')
    .att('id', pictureId)
    .att('name', pictureName)
    .up();

  return drawingObjectNonVisualPropertiesFragment;
};

const buildWrapSquare = () => {
  const wrapSquareFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'wrapSquare')
    .att('wrapText', 'bothSides')
    .att('distB', '228600')
    .att('distT', '228600')
    .att('distL', '228600')
    .att('distR', '228600')
    .up();

  return wrapSquareFragment;
};

const buildWrapNone = () => {
  const wrapNoneFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'wrapNone')
    .up();

  return wrapNoneFragment;
};

const buildEffectExtentFragment = () => {
  const effectExtentFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'effectExtent')
    .att('b', '0')
    .att('l', '0')
    .att('r', '0')
    .att('t', '0')
    .up();

  return effectExtentFragment;
};

const buildExtent = ({ width, height }) => {
  const extentFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'extent')
    .att('cx', width)
    .att('cy', height)
    .up();

  return extentFragment;
};

const buildPositionV = () => {
  const positionVFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'positionV')
    .att('relativeFrom', 'paragraph')
    .ele('@wp', 'posOffset')
    .txt('19050')
    .up()
    .up();

  return positionVFragment;
};

const buildPositionH = () => {
  const positionHFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'positionH')
    .att('relativeFrom', 'column')
    .ele('@wp', 'posOffset')
    .txt('19050')
    .up()
    .up();

  return positionHFragment;
};

const buildSimplePos = () => {
  const simplePosFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'simplePos')
    .att('x', '0')
    .att('y', '0')
    .up();

  return simplePosFragment;
};

const buildAnchoredDrawing = (graphicType, attributes) => {
  const anchoredDrawingFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'anchor')
    .att('distB', '0')
    .att('distL', '0')
    .att('distR', '0')
    .att('distT', '0')
    .att('relativeHeight', '0')
    .att('behindDoc', 'false')
    .att('locked', 'true')
    .att('layoutInCell', 'true')
    .att('allowOverlap', 'false')
    .att('simplePos', 'false');
  // Even though simplePos isnt supported by Word 2007 simplePos is required.
  const simplePosFragment = buildSimplePos();
  anchoredDrawingFragment.import(simplePosFragment);
  const positionHFragment = buildPositionH();
  anchoredDrawingFragment.import(positionHFragment);
  const positionVFragment = buildPositionV();
  anchoredDrawingFragment.import(positionVFragment);
  const extentFragment = buildExtent({ width: attributes.width, height: attributes.height });
  anchoredDrawingFragment.import(extentFragment);
  const effectExtentFragment = buildEffectExtentFragment();
  anchoredDrawingFragment.import(effectExtentFragment);
  const wrapSquareFragment = buildWrapSquare();
  anchoredDrawingFragment.import(wrapSquareFragment);
  const drawingObjectNonVisualPropertiesFragment = buildDrawingObjectNonVisualProperties(
    attributes.id,
    attributes.fileNameWithExtension
  );
  anchoredDrawingFragment.import(drawingObjectNonVisualPropertiesFragment);
  const graphicFragment = buildGraphic(graphicType, attributes);
  anchoredDrawingFragment.import(graphicFragment);

  anchoredDrawingFragment.up();

  return anchoredDrawingFragment;
};

const buildInlineDrawing = (graphicType, attributes) => {
  const inlineDrawingFragment = fragment({
    namespaceAlias: { wp: namespaces.wp },
  })
    .ele('@wp', 'inline')
    .att('distB', '0')
    .att('distL', '0')
    .att('distR', '0')
    .att('distT', '0');

  const extentFragment = buildExtent({ width: attributes.width, height: attributes.height });
  inlineDrawingFragment.import(extentFragment);
  const effectExtentFragment = buildEffectExtentFragment();
  inlineDrawingFragment.import(effectExtentFragment);
  const drawingObjectNonVisualPropertiesFragment = buildDrawingObjectNonVisualProperties(
    attributes.id,
    attributes.fileNameWithExtension
  );
  inlineDrawingFragment.import(drawingObjectNonVisualPropertiesFragment);
  const graphicFragment = buildGraphic(graphicType, attributes);
  inlineDrawingFragment.import(graphicFragment);

  inlineDrawingFragment.up();

  return inlineDrawingFragment;
};

const buildDrawing = (inlineOrAnchored = false, graphicType, attributes) => {
  const drawingFragment = fragment({
    namespaceAlias: { w: namespaces.w },
  }).ele('@w', 'drawing');
  const inlineOrAnchoredDrawingFragment = inlineOrAnchored
    ? buildInlineDrawing(graphicType, attributes)
    : buildAnchoredDrawing(graphicType, attributes);
  drawingFragment.import(inlineOrAnchoredDrawingFragment);
  drawingFragment.up();

  return drawingFragment;
};

export {
  buildParagraph,
  buildTable,
  buildNumberingInstances,
  buildLineBreak,
  buildIndentation,
  buildTextElement,
  buildBold,
  buildItalics,
  buildUnderline,
  buildDrawing,
  fixupLineHeight,
};
