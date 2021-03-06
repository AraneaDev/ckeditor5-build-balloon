/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
//import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
//import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import SimpleUpload from 'ckeditor5-simple-upload/src/simpleupload';
//import Font from '@ckeditor/ckeditor5-font/src/font';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	//UploadAdapter,
    Alignment,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	//EasyImage,
	Heading,
    Highlight,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	Table,
	TableToolbar,
	SimpleUpload,
	//Font
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
            '|',
            'alignment',
			'|',
			'bold',
			'italic',
            'blockQuote',
			'|',
			'highlight',
            '|',
            'bulletedList',
            'numberedList',
            //'|',
            //'fontSize',
			//'fontFamily',
            '|',
            'link',
			'imageUpload',
            'mediaEmbed',
			'insertTable',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageTextAlternative',
			'|',
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight'
		],
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
