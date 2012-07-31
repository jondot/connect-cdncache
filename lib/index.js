
function connect_cdncache(maxage, smaxage) {
  return function (req, res, next) {

    cc = res.header('Cache-Control');
    // respect cache busters
    if( !(cc && cc.match(/private, max-age=0/)) )
    {
        res.header('Cache-Control', 'public, max-age='+maxage+', s-maxage='+smaxage);
    }
    next();
  }
}

module.exports = connect_cdncache




