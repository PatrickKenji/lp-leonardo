// Gera o link de WhatsApp com a mensagem pré-preenchida.
export const wapp = (msg = "Olá Leonardo, vim pelo site!") =>
  `https://wa.me/5544988362701?text=${encodeURIComponent(msg)}`;
