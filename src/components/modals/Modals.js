import classes from '../../modules/Modal.module.css'

function Modal({toggleModal, deleteBlog}) {
  return (
    <>
      <div className={classes.backdrop} onClick={toggleModal} />
      <dialog open className={classes.modal}>
        <h1>Are you sure you want to Delete?</h1>
        <div className={classes.actions}>
          <div className={classes.cancel} onClick={toggleModal}>Cancel</div>
          <div className={classes.delete} onClick={deleteBlog}>Delete</div>
        </div>
      </dialog>
    </>
  )
}

export default Modal