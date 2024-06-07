<template>
    <h1>Welcome to Isla Vacations VIP Savings Calculator</h1>
    <div>
      <input type="How many weeks">
      <input type="Room Type">
      <input type="Dates">
      <label>
        <input type="checkbox" v-model="onSeason">
      </label>
      <p>{{ onSeason ? 'Yes' : 'No' }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        onSeason: false,
      };
    },
    methods: {
      calculateTotalCostVIP() {
        const nights = 7;
        const weeks = nights / 7;
        const initialCost = 217;
        const inflationRate = 0.02;
        const platformFee = 299;
        const vipReturnRate = 0.1;
  
        let totalCost = 0;
        let currentCost = initialCost;
  
        for (let year = 1; year <= 10; year++) {
          totalCost += currentCost * nights;
  
          if (year >= 3) {
            totalCost += platformFee;
          }
  
          currentCost *= 1 + inflationRate;
        }
  
        const vipReturn = totalCost * vipReturnRate;
        totalCost += vipReturn;
  
        console.log(totalCost); 
        return totalCost;
      },
  
      calculateTotalCostRegular() {
        const nightsPerStay = 7;
        const staysPerYear = 2;
        const costPerNight = 283;
  
        let totalCost = 0;
  
        for (let year = 1; year <= 10; year++) {
          totalCost += nightsPerStay * costPerNight * staysPerYear;
        }
  
        console.log(totalCost); 
        return totalCost;
      }
    }
  };
  </script>
  
  <style>
  .savings-calculator {
    font-size: 1.5em;
    color: #333;
  }
  
  .savings-calculator .total-cost {
    font-size: 2em;
    color: #f00;
  }
  </style>
  