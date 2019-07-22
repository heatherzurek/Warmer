import React from 'react';

export default function Header(props) {
      const divStyles1 = {
          width: '100%',
          backgroundColor: '#7bb550',
      }
      const divStyles2 = {
          width: '100%',
          backgroundColor: '#3b6853',
      }
    return (
      <div>
      <h1>Climate Change Prevention</h1>
      <h2>Simple Steps With Huge Impact</h2>
      <div style={divStyles1}>
        <h2>Conserve Water</h2>
        <h4>Not using it? Turn it off!</h4>
        <p>Saving water reduces carbon pollution, too. Thats because it takes a lot of energy to pump, heat, and treat your water. So take shorter showers, turn off the tap while brushing your teeth, and switch to WaterSense-labeled fixtures and appliances. The EPA estimates that if just one out of every 100 American homes were retrofitted with water-efficient fixtures, about 100 million kilowatt-hours of electricity per year would be saved—avoiding 80,000 tons of global warming pollution.</p>
      </div>

      <div style={divStyles2}>
        <h2>Reduce Your Waste</h2>
        <h4>Make it a habit to recycle.</h4>
        <p>It has been estimated that 29% of U.S. greenhouse gas emissions result from the “provision of goods,” which means the extraction of resources, manufacturing, transport, and final disposal of “goods” which include consumer products and packaging, building components, and passenger vehicles, but excluding food. By buying used products and reselling or recyling items you no longer use, you dramatically reduce your carbon footprint from the “provision of goods.”</p>
      </div>

      <div style={divStyles1}>
        <h2>Food</h2>
        <h4>Make it a habit to recycle.</h4>
        <p>Eat low on the food chain. This means eating mostly fruits, veggies, grains, and beans. Livestock—meat and dairy—is responsible for 14.5 percent of manmade global greenhouse gas emissions, mainly from feed production and processing and the methane (25 times more potent than CO2 at trapping heat in the atmosphere over 100 years) that beef and sheep belch out. Every day that you forgo meat and dairy, you can reduce your carbon footprint by 8 pounds—that’s 2,920 pounds a year.

Choose organic and local foods that are in season. Transporting food from far away, whether by truck, ship, rail or plane, uses fossil fuels for fuel and for cooling to keep foods in transit from spoiling.

Buy foodstuffs in bulk when possible using your own reusable container.

Reduce your food waste by planning meals ahead of time, freezing the excess and reusing leftovers.

Compost your food waste if possible. (If you live in New York City, you can find a compost drop-off site here.</p>
      </div>

      <div style={divStyles2}>
        <h2>Reduce Your Waster</h2>
        <h4>Make it a habit to recycle.</h4>
        <p>Saving water reduces carbon pollution, too. Thats because it takes a lot of energy to pump, heat, and treat your water. So take shorter showers, turn off the tap while brushing your teeth, and switch to WaterSense-labeled fixtures and appliances. The EPA estimates that if just one out of every 100 American homes were retrofitted with water-efficient fixtures, about 100 million kilowatt-hours of electricity per year would be saved—avoiding 80,000 tons of global warming pollution.</p>
      </div>

      <div style={divStyles1}>
        <h2>Alternatives to driving</h2>
        <p>When possible, walk or ride your bike in order to avoid carbon emissions completely. Carpooling and public transportation drastically reduce CO2 emissions by spreading them out over many riders.</p>
      </div>
      </div>

    )
};
