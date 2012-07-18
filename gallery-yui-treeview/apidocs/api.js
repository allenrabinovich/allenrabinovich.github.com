YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "TreeLeaf",
        "TreeView",
        "WidgetHTMLRenderer"
    ],
    "modules": [
        "gallery-yui-treeview",
        "widget-htmlrenderer"
    ],
    "allModules": [
        {
            "displayName": "gallery-yui-treeview",
            "name": "gallery-yui-treeview",
            "description": "The Treeview module is a UI widget that allows users\nto create a visual representation of a hierarchical list\nof elements."
        },
        {
            "displayName": "widget-htmlrenderer",
            "name": "widget-htmlrenderer",
            "description": "Provides the WidgetHTMLRenderer extensions, which override the base Widget API \nto allow widgets to be rendered purely using HTML from templates, without any \nNode references. \n\nThis allows Widgets to be rendered on the server, and also optimizes rendering \nin high-scale applications such as TreeView.\n\n**Note:** When applied, Node references to `boundingBox` and `contentBox` \nwon't be available until the Widget is rendered.\n\nAlthough not required of widget implementors, the Widget base class uses\nHandlebars to render its `boundingBox` and `contentBox` templates. If \noverriding the `CONTENT_TEMPLATE` or `BOUNDING_TEMPLATE` values, you should \nuse Handlebars token syntax, and maintain tokens used by the default \ntemplates."
        }
    ]
} };
});