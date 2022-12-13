window.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.querySelector('#contact-btn')

  contactBtn.addEventListener('click', (event) => {
    const contractModal = document.querySelector('.contact-modal')

    document.body.classList.add('_lock');
    contractModal.classList.add('show')
  })

  const cross = document.querySelector('#cross');

  cross.addEventListener('click', () => {
    const contractModal = document.querySelector('.contact-modal')

    document.body.classList.remove('_lock');
    contractModal.classList.remove('show')
  })

  const formContract = document.querySelector('#contact-form')

  function serializeForm(formNode) {
    const { elements } = formNode;
    const obj = {}

    Array.from(elements).forEach((element) => {
      const { name, value } = element;
      obj[name] = value;
    })

    return obj;
  }

  formContract.addEventListener('submit', (event) => {
    event.preventDefault();

    const contractModal = document.querySelector('.contact-modal')

    document.body.classList.remove('_lock');
    contractModal.classList.remove('show')

    const data = serializeForm(formContract)
    alert(`Name is ${data.name}, phone - ${data.phone}`)
  })
})
