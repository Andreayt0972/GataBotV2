function handler(m) {
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, '573125484672', 'OFICIAL - ANDREABot', m)
  this.sendContact(m.chat, '573125484672', 'OFICIAL - SubANDREABot', m)
  this.sendContact(m.chat, '573125484672', 'ANDREA Dios', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña)$/i

module.exports = handler
