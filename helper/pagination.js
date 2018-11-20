exports.pagination = function (pageNo, pageSize, totalRec) {

    function pagingObject(pageCount, start, last, pageNo, pageSize, pages, startPage, lastPage) {
        // total page
        this.pageCount = pageCount,
            // the item start 
            this.start = start,
            // the item last
            this.last = last,
            // current page
            this.pageNo = pageNo,
            // item per page
            this.pageSize = pageSize,
            // array for the pager control
            this.pages = pages,
            this.startPage = startPage,
            this.lastPage = lastPage

    }



    var pagingObject = new pagingObject();
    pagingObject.start = (pageNo - 1) * pageSize + 1;
    pagingObject.previous = 1;
    pagingObject.pageNo = pageNo;
    pagingObject.pageSize = pageSize;
    if (totalRec % pageSize > 0) {
        pagingObject.pageCount = Math.ceil(totalRec / pageSize);
    } else {
        pagingObject.pageCount = (totalRec / pageSize);
    }

    if (pagingObject.pageCount <= 8) {
        pagingObject.startPage = 1;
        pagingObject.lastPage = 8;
    } else {
        if (pagingObject.pageNo <= 5) {
            pagingObject.startPage = 1;
            pagingObject.lastPage = 8;
        } else if (pagingObject.pageNo + 3 >= pagingObject.pageCount) {
            pagingObject.startPage = pagingObject.pageCount - 7;
            pagingObject.lastPage = pagingObject.pageCount;
        } else {
            pagingObject.startPage = pagingObject.pageNo - 4;
            pagingObject.lastPage = pagingObject.startPage + 7;
            // pagingObject.lastPage = pagingObject.pageNo + 3; => correct

        }
    }

    pagingObject.pages = Array.from(Array(8).keys()).map(i => pagingObject.startPage + i);

    return pagingObject;
}
