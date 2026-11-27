const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  menuToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  mainNav.classList.toggle('is-open', !open);
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));
const quickArrival = document.querySelector('#quick-arrival');
const quickDeparture = document.querySelector('#quick-departure');
const arrival = document.querySelector('#arrival');
const departure = document.querySelector('#departure');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
[quickArrival, quickDeparture, arrival, departure].forEach(input => input.min = localToday);
function updateDepartureMin(arrive, leave) {
  leave.min = arrive.value || localToday;
  if (leave.value && arrive.value && leave.value <= arrive.value) leave.value = '';
}
quickArrival.addEventListener('change', () => updateDepartureMin(quickArrival, quickDeparture));
arrival.addEventListener('change', () => updateDepartureMin(arrival, departure));
document.querySelector('#quick-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  if (quickDeparture.value <= quickArrival.value) {
    quickDeparture.setCustomValidity('Choose a departure date after arrival.');
    quickDeparture.reportValidity();
    quickDeparture.setCustomValidity('');
    return;
  }
  arrival.value = quickArrival.value;
  departure.value = quickDeparture.value;
  document.querySelector('#guests').value = quickGuestsValue();
  document.querySelector('#enquire').scrollIntoView({behavior:'smooth',block:'start'});
});
function quickGuestsValue() {
  const value = document.querySelector('#quick-guests').value;
  return value === '1' ? '1 guest' : value + ' guests';
}
document.querySelectorAll('.choose-stay').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#room').value = button.dataset.room;
    document.querySelector('#enquire').scrollIntoView({behavior:'smooth',block:'start'});
  });
});
const enquiryForm = document.querySelector('#enquiry-form');
const enquiryResult = document.querySelector('#enquiry-result');
const summary = document.querySelector('#enquiry-summary');
const copyStatus = document.querySelector('#copy-status');
function readableDate(value) {
  return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric'}).format(new Date(value + 'T12:00:00'));
}
enquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;
  if (departure.value <= arrival.value) {
    departure.setCustomValidity('Departure must be after arrival.');
    departure.reportValidity();
    departure.setCustomValidity('');
    return;
  }
  const note = document.querySelector('#guest-note').value.trim();
  const lines = [
    'MOKORO HOUSE | STAY ENQUIRY','',
    'Arrival: ' + readableDate(arrival.value),
    'Departure: ' + readableDate(departure.value),
    'Guests: ' + document.querySelector('#guests').value,
    'Preferred stay: ' + document.querySelector('#room').value,
    'Additional notes: ' + (note || 'None'),'',
    'Website concept enquiry. No reservation has been made and no message has been sent.'
  ];
  summary.textContent = lines.join('\n');
  enquiryForm.hidden = true;
  enquiryResult.hidden = false;
  enquiryResult.scrollIntoView({behavior:'smooth',block:'center'});
});
document.querySelector('#copy-enquiry').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(summary.textContent);
    copyStatus.textContent = 'Enquiry copied.';
  } catch {
    const helper = document.createElement('textarea');
    helper.value = summary.textContent;
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    const copied = document.execCommand('copy');
    helper.remove();
    copyStatus.textContent = copied ? 'Enquiry copied.' : 'Copy was unavailable. Please select the text manually.';
  }
});
document.querySelector('#edit-enquiry').addEventListener('click', () => {
  enquiryResult.hidden = true;
  enquiryForm.hidden = false;
  copyStatus.textContent = '';
  enquiryForm.scrollIntoView({behavior:'smooth',block:'center'});
});
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
document.querySelectorAll('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = image?.alt || 'Mokoro House gallery photograph';
    lightbox.showModal();
  });
});
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});