//Select Integration
//ComboCidades = comboPlanes

window.onload = function () {

    var comboPlanes = document.getElementById('aeronaveSelect')
    var comboPlanes = document.getElementById('aeronaveSelect')

    var opt0 = document.createElement("option");
    opt0.value = "0";
    opt0.text = "";
    opt0.weight = "";
    opt0.braco = "";
    comboPlanes.add(opt0, comboPlanes.options[0]);

    var opt1 = document.createElement("option");
    opt1.value = "ppGob";
    opt1.text = "PP-GOB";
    opt1.weight = 551.47;
    opt1.braco = 393.28;
    comboPlanes.add(opt1, comboPlanes.options[1]);

    var opt2 = document.createElement("option");
    opt2.value = "ppFlh";
    opt2.text = "PP-FLH";
    opt2.weight = 568.36;
    opt2.braco = 550;
    comboPlanes.add(opt2, comboPlanes.options[2]);

    let pesoBasicoVazio = comboPlanes.options[comboPlanes.selectedIndex].weight;

    document.getElementById("submitWeight").onclick = function () {
        //Duração das fases
        let etapaDuration = function () {
            return JSON.parse(document.getElementById("etapaDurationHr").value) + (JSON.parse(document.getElementById("etapaDurationMin").value) / 60)
        };

        let alternativeDuration = function () {
            return JSON.parse(document.getElementById("alternativeDurationHr").value) + (JSON.parse(document.getElementById("alternativeDurationMin").value) / 60)
        };

        let reservaDuration = function () {
            return JSON.parse(document.getElementById("reservaDurationHr").value) + (JSON.parse(document.getElementById("reservaDurationMin").value) / 60)
        };

        let aditionalDuration = function () {
            return JSON.parse(document.getElementById("aditionalDurationHr").value) + (JSON.parse(document.getElementById("aditionalDurationMin").value) / 60)
        };

        let tempoMinRequired = function () {
            return etapaDuration() + alternativeDuration() + reservaDuration()
        };

        let totalOnBoard = function () {
            return tempoMinRequired() + aditionalDuration()
        }
        //Consumo das fases
        const consumo = 23;
        let consumoFunction = function (e) { return e * consumo };
        let etapaConsumo = consumoFunction(etapaDuration());
        let alternativeConsumo = consumoFunction(alternativeDuration());
        let reservaConsumo = consumoFunction(reservaDuration());
        let aditionalConsumo = consumoFunction(aditionalDuration());
        let tempoMinConsumo = consumoFunction(tempoMinRequired());
        let totalOnConsumo = consumoFunction(totalOnBoard());

        console.log(totalOnConsumo)

        console.log("Tempo mínimo: " + tempoMinRequired())
        console.log("Tempo Total: " + totalOnBoard())


        //Flight Release Table
        // Creating and adding data to first row of the table
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        document.getElementById('body').appendChild(table);

        table.appendChild(thead);
        table.appendChild(tbody);

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "TEMPO";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "COMBUSTÍVEL (lts)";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        thead.appendChild(row_1);


        // Creating and adding data to second row of the table
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = "Etapa";
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = etapaDuration().toFixed(2);
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = etapaConsumo.toFixed(2);

        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        tbody.appendChild(row_2);


        // Creating and adding data to third row of the table
        let row_3 = document.createElement('tr');
        let row_3_data_1 = document.createElement('td');
        row_3_data_1.innerHTML = "Alternativa";
        let row_3_data_2 = document.createElement('td');
        row_3_data_2.innerHTML = alternativeDuration().toFixed(2);
        let row_3_data_3 = document.createElement('td');
        row_3_data_3.innerHTML = alternativeConsumo.toFixed(2);

        row_3.appendChild(row_3_data_1);
        row_3.appendChild(row_3_data_2);
        row_3.appendChild(row_3_data_3);
        tbody.appendChild(row_3);


        // Creating and adding data to forth row of the table
        let row_4 = document.createElement('tr');
        let row_4_data_1 = document.createElement('td');
        row_4_data_1.innerHTML = "Reserva";
        let row_4_data_2 = document.createElement('td');
        row_4_data_2.innerHTML = reservaDuration().toFixed(2);
        let row_4_data_3 = document.createElement('td');
        row_4_data_3.innerHTML = reservaConsumo.toFixed(2);

        row_4.appendChild(row_4_data_1);
        row_4.appendChild(row_4_data_2);
        row_4.appendChild(row_4_data_3);
        tbody.appendChild(row_4);


        // Creating and adding data to fifth row of the table
        let row_5 = document.createElement('tr');
        let row_5_data_1 = document.createElement('td');
        row_5_data_1.innerHTML = "Mín. Requerido";
        let row_5_data_2 = document.createElement('td');
        row_5_data_2.innerHTML = tempoMinRequired().toFixed(2);
        let row_5_data_3 = document.createElement('td');
        row_5_data_3.innerHTML = tempoMinConsumo.toFixed(2);

        row_5.appendChild(row_5_data_1);
        row_5.appendChild(row_5_data_2);
        row_5.appendChild(row_5_data_3);
        tbody.appendChild(row_5);


        // Creating and adding data to sixth row of the table
        let row_6 = document.createElement('tr');
        let row_6_data_1 = document.createElement('td');
        row_6_data_1.innerHTML = "Adicional";
        let row_6_data_2 = document.createElement('td');
        row_6_data_2.innerHTML = aditionalDuration().toFixed(2);
        let row_6_data_3 = document.createElement('td');
        row_6_data_3.innerHTML = aditionalConsumo.toFixed(2);

        row_6.appendChild(row_6_data_1);
        row_6.appendChild(row_6_data_2);
        row_6.appendChild(row_6_data_3);
        tbody.appendChild(row_6);


        // Creating and adding data to seventh row of the table
        let row_7 = document.createElement('tr');
        let row_7_data_1 = document.createElement('td');
        row_7_data_1.innerHTML = "Total a Bordo";
        let row_7_data_2 = document.createElement('td');
        row_7_data_2.innerHTML = totalOnBoard().toFixed(2);
        let row_7_data_3 = document.createElement('td');
        row_7_data_3.innerHTML = totalOnConsumo.toFixed(2);

        row_7.appendChild(row_7_data_1);
        row_7.appendChild(row_7_data_2);
        row_7.appendChild(row_7_data_3);
        tbody.appendChild(row_7);


        //Calculo de Peso e Balanceamento
        //Peso e Balancemanto
        const pesoMaxDecolagem = 770;
        const oleoWeight = 5.7;
        const litroWeight = 0.72;
        let pesoBasicoVazio = comboPlanes.options[comboPlanes.selectedIndex].weight;
        let pilotWeight = JSON.parse(document.getElementById("pilotWeight").value);
        let passangerWeight = JSON.parse(document.getElementById("passengerWeight").value)
        let bagageiroWeight = JSON.parse(document.getElementById("bagageiroWeight").value)
        let pesoDispTotal = function () { return pesoMaxDecolagem - pesoBasicoVazio };
        let fuelWeight = function () { return (totalOnBoard() * consumo) * litroWeight };
        let tripulantesWeight = function () { return pilotWeight + passangerWeight }
        let maxPayload = function () { return  pesoDispTotal() - (tripulantesWeight() + fuelWeight())};
        //Braços
        let planeBraco = comboPlanes.options[comboPlanes.selectedIndex].braco;
        const pilotBraco = 156;
        const oleoBraco = -1000;
        const passengerBraco = 873;
        const combustivelBraco = 650;
        const bagageiroBraco = 1400;
        //Functions
        let calcMomento = function (p, b) {
            return p * b
        }
        let pesoDecolagem = function () {
            return pesoBasicoVazio + pilotWeight + oleoWeight + passangerWeight + fuelWeight() + bagageiroWeight
        }
        //Momento
        let momentoPBV = calcMomento(pesoBasicoVazio, planeBraco);
        let momentoPiloto = calcMomento(pilotWeight, pilotBraco);
        let momentoOleo = calcMomento(oleoWeight, oleoBraco);
        let momentoPassanger = calcMomento(passangerWeight, passengerBraco);
        let momentoFuel = calcMomento(fuelWeight(), combustivelBraco);
        let momentoBagageiro = calcMomento(bagageiroWeight, bagageiroBraco);
        let momentoTotal = function () {
            return momentoPBV + momentoPiloto + momentoOleo + momentoPassanger + momentoFuel + momentoBagageiro
        }
        //Braço Total
        let bracoTotal = function () {
            return momentoTotal() / pesoDecolagem()
        }
        //Calculo de peso de decolagem
        let pbv = document.getElementById("pesoBasico");
        pbv.innerHTML = "Peso Básico vazio: " + pesoBasicoVazio.toFixed(2);
        let pesoDisp = document.getElementById("pesoDisp");
        pesoDisp.innerHTML = "Peso disponível Total: " + pesoDispTotal().toFixed(2);
        let pesoCombust = document.getElementById("pesoFuel");
        pesoCombust.innerHTML = "Combustível nos tanques: " + fuelWeight().toFixed(2);
        let pesoCrew = document.getElementById("pesoCrew");
        pesoCrew.innerHTML = "Peso dos tripulantes: " + tripulantesWeight().toFixed(2);
        let payload = document.getElementById("payloadMax");
        payload.innerHTML = "Payload máximo: " + maxPayload().toFixed(2);


        //Calculo de Peso e Balanceamento
        // Creating and adding data to first row of the table
        let table2 = document.createElement('table');
        let thead2 = document.createElement('thead');
        let tbody2 = document.createElement('tbody');

        document.getElementById('secondTable').appendChild(table2);

        table2.appendChild(thead2);
        table2.appendChild(tbody2);

        let row_12 = document.createElement('tr');
        let heading_12 = document.createElement('th');
        heading_12.innerHTML = "Descrição";
        let heading_22 = document.createElement('th');
        heading_22.innerHTML = "Peso";
        let heading_32 = document.createElement('th');
        heading_32.innerHTML = "Braço";
        let heading_42 = document.createElement('th');
        heading_42.innerHTML = "Momento";

        row_12.appendChild(heading_12);
        row_12.appendChild(heading_22);
        row_12.appendChild(heading_32);
        row_12.appendChild(heading_42);
        thead2.appendChild(row_12);


        // Creating and adding data to second row of the table
        let row_22 = document.createElement('tr');
        let row_22_data_1 = document.createElement('td');
        row_22_data_1.innerHTML = "Peso Básico Vazio";
        let row_22_data_2 = document.createElement('td');
        row_22_data_2.innerHTML = pesoBasicoVazio.toFixed(2);
        let row_22_data_3 = document.createElement('td');
        row_22_data_3.innerHTML = planeBraco.toFixed(2);
        let row_22_data_4 = document.createElement('td');
        row_22_data_4.innerHTML = momentoPBV.toFixed(2);

        row_22.appendChild(row_22_data_1);
        row_22.appendChild(row_22_data_2);
        row_22.appendChild(row_22_data_3);
        row_22.appendChild(row_22_data_4);
        tbody2.appendChild(row_22);


        // Creating and adding data to third row of the table
        let row_32 = document.createElement('tr');
        let row_32_data_1 = document.createElement('td');
        row_32_data_1.innerHTML = "Piloto";
        let row_32_data_2 = document.createElement('td');
        row_32_data_2.innerHTML = pilotWeight.toFixed(2);
        let row_32_data_3 = document.createElement('td');
        row_32_data_3.innerHTML = pilotBraco.toFixed(2);
        let row_32_data_4 = document.createElement('td');
        row_32_data_4.innerHTML = momentoPiloto.toFixed(2);

        row_32.appendChild(row_32_data_1);
        row_32.appendChild(row_32_data_2);
        row_32.appendChild(row_32_data_3);
        row_32.appendChild(row_32_data_4);
        tbody2.appendChild(row_32);


        // Creating and adding data to forth row of the table
        let row_42 = document.createElement('tr');
        let row_42_data_1 = document.createElement('td');
        row_42_data_1.innerHTML = "Óleo";
        let row_42_data_2 = document.createElement('td');
        row_42_data_2.innerHTML = oleoWeight.toFixed(2);
        let row_42_data_3 = document.createElement('td');
        row_42_data_3.innerHTML = oleoBraco.toFixed(2);
        let row_42_data_4 = document.createElement('td');
        row_42_data_4.innerHTML = momentoOleo.toFixed(2);

        row_42.appendChild(row_42_data_1);
        row_42.appendChild(row_42_data_2);
        row_42.appendChild(row_42_data_3);
        row_42.appendChild(row_42_data_4);
        tbody2.appendChild(row_42);


        // Creating and adding data to fifth row of the table
        let row_52 = document.createElement('tr');
        let row_52_data_1 = document.createElement('td');
        row_52_data_1.innerHTML = "Passageiro";
        let row_52_data_2 = document.createElement('td');
        row_52_data_2.innerHTML = passangerWeight.toFixed(2);
        let row_52_data_3 = document.createElement('td');
        row_52_data_3.innerHTML = passengerBraco.toFixed(2);
        let row_52_data_4 = document.createElement('td');
        row_52_data_4.innerHTML = momentoPassanger.toFixed(2);

        row_52.appendChild(row_52_data_1);
        row_52.appendChild(row_52_data_2);
        row_52.appendChild(row_52_data_3);
        row_52.appendChild(row_52_data_4);
        tbody2.appendChild(row_52);

        // Creating and adding data to sixth row of the table
        let row_62 = document.createElement('tr');
        let row_62_data_1 = document.createElement('td');
        row_62_data_1.innerHTML = "Combustível";
        let row_62_data_2 = document.createElement('td');
        row_62_data_2.innerHTML = fuelWeight().toFixed(2);
        let row_62_data_3 = document.createElement('td');
        row_62_data_3.innerHTML = combustivelBraco.toFixed(2);
        let row_62_data_4 = document.createElement('td');
        row_62_data_4.innerHTML = momentoFuel.toFixed(2);

        row_62.appendChild(row_62_data_1);
        row_62.appendChild(row_62_data_2);
        row_62.appendChild(row_62_data_3);
        row_62.appendChild(row_62_data_4);
        tbody2.appendChild(row_62);


        // Creating and adding data to seventh row of the table
        let row_72 = document.createElement('tr');
        let row_72_data_1 = document.createElement('td');
        row_72_data_1.innerHTML = "Bagageiro";
        let row_72_data_2 = document.createElement('td');
        row_72_data_2.innerHTML = bagageiroWeight.toFixed(2);
        let row_72_data_3 = document.createElement('td');
        row_72_data_3.innerHTML = bagageiroBraco.toFixed(2);
        let row_72_data_4 = document.createElement('td');
        row_72_data_4.innerHTML = momentoBagageiro.toFixed(2);

        row_72.appendChild(row_72_data_1);
        row_72.appendChild(row_72_data_2);
        row_72.appendChild(row_72_data_3);
        row_72.appendChild(row_72_data_4);
        tbody2.appendChild(row_72);


        // Creating and adding data to seventh row of the table
        let row_82 = document.createElement('tr');
        let row_82_data_1 = document.createElement('td');
        row_82_data_1.innerHTML = "Peso Dec.";
        let row_82_data_2 = document.createElement('td');
        row_82_data_2.innerHTML = pesoDecolagem();
        let row_82_data_3 = document.createElement('td');
        row_82_data_3.innerHTML = bracoTotal().toFixed(2);
        let row_82_data_4 = document.createElement('td');
        row_82_data_4.innerHTML = momentoTotal().toFixed(2);

        row_82.appendChild(row_82_data_1);
        row_82.appendChild(row_82_data_2);
        row_82.appendChild(row_82_data_3);
        row_82.appendChild(row_82_data_4);
        tbody2.appendChild(row_82);

    }
}
