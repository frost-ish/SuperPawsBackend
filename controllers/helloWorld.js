const crypto = require('crypto')

const sayHello = (req, res) => {
    const forge = require('node-forge')

const entitySecret = forge.util.hexToBytes('42d1af99c1960eb9ed61ac0976d46d58f2e066093f8049e5b031359a0ee69b39')
const publicKey = forge.pki.publicKeyFromPem('-----BEGIN RSA PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA6Atuy9McUU/FOfEic31W\nFDGnDj416L7LzAIX1Sy2KJ36UomiqTCmLjLEhoLtuplLUYzKoxgVokimZIkswIED\nLF96haDjwhZk/gkg4xe4Eo1uACMlAApRv+69UAcinyqhF1KFSLdMqNyVN1Aa/NB8\nyyRcu/+EsgZ3CH29VA7Rt9SkI2DksPRMRMHqZmJ3xKZyNg8qBdlpc58zaYHGNItb\naLisGXZ0NvoZJp28Hbbmf2EgvXuIIs/5zZdghofqhBcBZ5Jcj/q8mlaqR4co5vvj\n1W1s4jUwL/vOifOGoJKGzjfOqqKn/LEYGpuEVjkuM/lyLq4z4qfz946OTLW+dFUC\ny6X9maU0YjHDM0BefwpEOCqTXGKWrnjOPA8cxQosO4HQRJPnW4GToG2ICAfZkBYi\nXcINaHYVAPAZhSpRtVo1tY4cHIr0KaiyA4bXvuEVohdSHeqO6deoxT1UrKRLxOpf\nMZ8aPQma57YcAbpblu8myfClVNDs0xwa8Bdwz1hUnZCir6bOlM1tFk3/jHiqAf3v\nkZELm359jRAcUBYJ6fjRLbS8RJBhWyhIywEOc9UaDObZJ7e5e56Aq+TgtVi02mKW\n3sjgyjJkw8kGTOjrarWf19jNY8dt6qXd20HCGYKKtx1fOe6sUXtY1j7s38o2iQmU\ntvcvu7grFQIcd7MlzpvHV70CAwEAAQ==\n-----END RSA PUBLIC KEY-----\n')
const encryptedData = publicKey.encrypt(entitySecret, 'RSA-OAEP', {
  md: forge.md.sha256.create(),
  mgf1: {
    md: forge.md.sha256.create(),
  },
})

res.json({"message":forge.util.encode64(encryptedData)}) 
}
module.exports = {sayHello}