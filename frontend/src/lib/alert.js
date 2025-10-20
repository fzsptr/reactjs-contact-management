import Swal from 'sweetalert2'

export const alertSuccess = async (message) => {
    return Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: message
    })
}

export const alertError = async (message) => {
    return Swal.fire({
        icon: 'error',
        title: 'Ups!',
        text: message
    })
}

export const alertConfirm = async (message) => {
    const result = await Swal.fire({
        icon: 'question',
        title: 'Are u sure?',
        text: message,
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes'
    })
    return (await result).isConfirmed;
}