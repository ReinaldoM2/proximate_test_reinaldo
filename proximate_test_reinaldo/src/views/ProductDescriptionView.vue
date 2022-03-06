<template>
  <div class="justify-content-center">
    <div>
      <img src="https://www.xtracking.co/images/logo-xtracking.svg" alt="">
    </div>
    <center>
      <div class="mt-4">
        <pre class="text-start">
          Con la aplicación móvil de XtrackingP podrás:
          - Hacer gestión de las encuestas en donde quiera que estés.
          - Recibir en tiempo real información de interés, cualitativa y cuantitativa, sobre tus productos o servicios.
          - Revisar los comentarios de tus clientes en el momento en que suceden.
          - Calcular tu NPS real.
          - Crear un canal directo y permanente con tus clientes para así tomar decisiones estratégicas.
          
          Funciones principales de XtrackingP:
          - Recibir push notifications en tiempo real.
          - Hacer filtros de quejas/ comentarios por fechas y canales de servicio.
          - Visualización de la información, tanto cualitativa como cuantitativa, directamente en tu app.
          - Crear un canal de comunicación directo con tu cliente y con tus sedes para dar respuesta inmediata.
        </pre>
      </div>
      <button class="btn btn-primary" @click.prevent="volver">Volver</button>
    </center>
  </div>
</template>
<script>
import router from '@/router'
export default {
  methods: {
    async volver(){
      router.back()
    }
  }
}
</script>