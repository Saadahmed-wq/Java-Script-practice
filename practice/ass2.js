// let username;


// let myName = "Saad ahmed"

// console.log(myName);


// let message = "Hello world"

// alert(message)

// let email = `saadhere04@gmail.com`;
// alert( `My name address is ${email} `)


// document.write( "I can write HTML through Java script")





let button = document.getElementById("btn")



button.addEventListener("dblclick", function(){

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) swalWithBootstrapButtons.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
  else if (result.dismiss === Swal.DismissReason.cancel)
 /* Read more about handling dismissals below */
  swalWithBootstrapButtons.fire({
    title: "Cancelled",
    text: "Your imaginary file is safe :)",
    icon: "error"
  });
});

    
}
)