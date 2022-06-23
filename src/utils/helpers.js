import Swal from 'sweetalert2'

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 1500,
  showConfirmButton: false,
})