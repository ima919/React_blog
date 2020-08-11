/***
 * @auth: dmx
 * @time: 2020/6/27
 * @func:处理是否要重试
 ***/

const WHITELIST = [
  'ETIMEDOUT',
  'ECONNRESET',
  'EADDRINUSE',
  'ESOCKETTIMEDOUT',
  'ECONNREFUSED',
  'EPIPE',
];

const BLACKLIST = [
  'ENOTFOUND',
  'ENETUNREACH',
  'UNABLE_TO_GET_ISSUER_CERT',
  'UNABLE_TO_GET_CRL',
  'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
  'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
  'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
  'CERT_SIGNATURE_FAILURE',
  'CRL_SIGNATURE_FAILURE',
  'CERT_NOT_YET_VALID',
  'CERT_HAS_EXPIRED',
  'CRL_NOT_YET_VALID',
  'CRL_HAS_EXPIRED',
  'ERROR_IN_CERT_NOT_BEFORE_FIELD',
  'ERROR_IN_CERT_NOT_AFTER_FIELD',
  'ERROR_IN_CRL_LAST_UPDATE_FIELD',
  'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
  'OUT_OF_MEM',
  'DEPTH_ZERO_SELF_SIGNED_CERT',
  'SELF_SIGNED_CERT_IN_CHAIN',
  'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
  'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
  'CERT_CHAIN_TOO_LONG',
  'CERT_REVOKED',
  'INVALID_CA',
  'PATH_LENGTH_EXCEEDED',
  'INVALID_PURPOSE',
  'CERT_UNTRUSTED',
  'CERT_REJECTED',
];

const isAllowed = (error: any) => { ////接受一个错误信息
  if( !error || !error.code) return true;////错误信息不存在或者没有错误信息的状态码
  if( WHITELIST.indexOf(error.code) !== -1 ) return true;////！== -1就是找到

  return BLACKLIST.indexOf(error.code) === -1;
}

export default (error: any) => !error.response
  && Boolean(error.code) // 避开重试取消的请求，（请求已经取消了，没有必要重试了）
  && error.code !== 'ECONNABORTED'////已经失败的请求没必要重试了
  && isAllowed(error);////判断是不是在上边两个数组里

