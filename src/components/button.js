import "../style/Boton.css"

export function Botones({ texto, tipoBoton,acciones }) {
  return (
    <div class="d-grid gap-2 col-4 mx-auto">
      <button
        class={tipoBoton ? "btn btn-outline-success" : "btn btn-outline-danger"}
        type="button"
        onClick={acciones}
      >
        {texto}
      </button>
    </div>
  );
}