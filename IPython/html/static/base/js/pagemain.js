// Copyright (c) IPython Development Team.
// Distributed under the terms of the Modified BSD License.

var ipython = ipython || {};
require(['base/js/page'], function(Page) {
    ipython.page = new page.Page();
    ipython.page.show();
});
