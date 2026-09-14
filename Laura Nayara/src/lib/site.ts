export const site = {
  name: 'Laura Nayara Beauty Studio',
  whatsapp: '5589981077035',
  phoneLabel: '(89) 98107-7035',
  booking: 'https://client.tuaagenda.com/c/LauraNayara',
  instagram: 'https://www.instagram.com/laura.nayara/',
  address: 'R. Rui Barbosa, 777 — Junco, Picos–PI',
  maps: 'https://www.google.com/maps/search/?api=1&query=R.+Rui+Barbosa,+777,+Junco,+Picos,+PI',
};
export const book = (service = 'meu horário') => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Olá, Laura! Quero agendar ${service}.`)}`;
