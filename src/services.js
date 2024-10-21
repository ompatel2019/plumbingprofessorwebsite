import blockedDrains from './assets/blockedDrain.svg';
import gasPlumbing from './assets/gasPlumbing.svg';
import showerLeak from './assets/showerLeak.svg';
import toiletRepair from './assets/toilet.svg';
import hotWaterSystems from './assets/hotwatersystem.svg';
import emergencyPlumbing from './assets/emergency.svg'

const services = [
    { serviceName: 'Blocked Drains', serviceImg: blockedDrains, a: '#blockedDrain', id:'blockedDrain'},
    { serviceName: 'Gas Plumbing', serviceImg: gasPlumbing, a:'#gasPlumbing', id:'gasPlumbing'},
    { serviceName: 'Shower Leak', serviceImg: showerLeak, a:'#showerLeak', id:'showerLeak'},
    { serviceName: 'Toilet Repair', serviceImg: toiletRepair, a:'#toiletRepair', id:'toiletRepair'},
    { serviceName: 'Hot Water Systems', serviceImg: hotWaterSystems, a:'#hotWaterSystems', id:'hotWaterSystems'},
    { serviceName: 'Emergency Plumbing', serviceImg: emergencyPlumbing, a:'#emergencyPlumbing', id:'emergencyPlumbing'}
  ];

  export default services; 
  