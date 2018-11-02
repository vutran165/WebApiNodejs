exports.pagination = function (pageNo, pageSize, totalRec) {

    function pagingObject(pageCount, start, previous, last, pageNo, pageSize) {
        this.pageCount = pageCount,
        this.start = start,
        this.previous = previous,
        this.last = last,
        this.pageNo = pageNo,
        this.pageSize = pageSize
    }

    var pagingObject = new pagingObject();
    pagingObject.start = (pageNo - 1) * pageSize + 1;
    pagingObject.pageNo = pageNo;
    pagingObject.pageSize = pageSize;
    if (totalRec % pageSize > 0) {
        pagingObject.pageCount = Math.ceil(totalRec / pageSize);
        pagingObject.last = pagingObject.pageCount;
    } else {
        pagingObject.pageCount = (totalRec / pageSize);
        pagingObject.last = pagingObject.pageCount;
    }
    return pagingObject;
}
