import "../style/counter.css";

export function Contador({ cantidad }) {
  return (
      <div id="contador" class="card border-primary mb-3">
          <p id="numero" class={cantidad>0 ? "positivo":"negativo"}>{cantidad}</p>
    </div>
  );
}
