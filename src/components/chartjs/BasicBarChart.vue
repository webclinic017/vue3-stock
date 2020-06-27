<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: ['data'],
  watch: {
    data() {
      this.render();
    },
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      this.renderChart({
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Dividends',
            backgroundColor: '#f87979',
            data: this.data,
          },
        ],
      });
    },
  },
};
</script>
