/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/19/16
 */

import genResource, { setApiPrefix } from 'angular-es-utils/rs-generator';
setApiPrefix('/just-for-fun/1.0');

/**
 * @name messageResource 聊天记录
 * @method query 获取聊天记录(all)
 * @method get 获取聊天记录(byId)
 * */
export const messageResource = genResource('/message/:messageId', null, { messageId: '@messageId' }, {});
