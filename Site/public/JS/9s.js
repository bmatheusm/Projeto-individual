// verificar_autenticacao();

function salvar() {

        var formulario = new URLSearchParams(new FormData(form_cadastro));
        fetch("/usuarios/salvar", {
                method: "POST",
                body: formulario
        }).then(function (response) {

        if (response.ok) {

           alert('Dados salvos com sucesso');

        } else {

            console.log('Erro');
            alert('Erro');

        }
        });
       
        return false;
}

var randomizar = 'attack_menu';

but_system.style.color = 'rgb(173,169,151)';
but_system.style.background = '#534f46';

for (contador = 0; ; contador++) {       //Dando valores aleatorios de 4 a 9 para os chips
        valor_random = parseInt(Math.random() * 6 + 4);

        contador == 8 && randomizar == 'attack_menu' ? (contador = 0, randomizar = 'defense_menu') : contador == 10 && randomizar == 'defense_menu' ?
        (contador = 0, randomizar = 'support_menu') : contador == 9 && randomizar == 'support_menu' ? (contador = 0, randomizar = 'hacking_menu') : '';

        if (contador == 4 && randomizar == 'hacking_menu') break;

        elemento = document.getElementById(randomizar);
        elemento.children[contador].children[2].innerHTML = `[${valor_random}]`;

}

var info_slot = 128;
var ocupado = 80;
var numero = 0;
var system = 10;
var attack, defense, support, hacking;
attack = defense = support = hacking = 0;

var quantidade = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]; // Vetor para chips que não podem se repetir

function adicionar(chip) {              //Função para adicionar um chip no slot
        // Checando se é um chip que pode se repetir 
        if (chip == 'attack_continuous_combo' && quantidade[0] || chip == 'support_auto-collect_items' && quantidade[1] || chip == 'support_item_scan'
                && quantidade[2] || chip == 'support_evasive_system' && quantidade[3] || chip == 'support_bullet_detonation' && quantidade[4] || chip == 'hacking_death_rattle'
                && quantidade[5] || chip == 'system_os_chip' && quantidade[6] || chip == 'system_hp_gauge' && quantidade[7] || chip == 'system_skill_gauge'
                && quantidade[8] || chip == 'system_enemy_data' && quantidade[9] || chip == 'system_mini-map' && quantidade[10] || chip == 'system_objectives'
                && quantidade[11] || chip == 'system_text_log' && quantidade[12] || chip == 'system_save_points' && quantidade[13] || chip == 'system_damage_values'
                && quantidade[14] || chip == 'system_control' && quantidade[15] || chip == 'system_exp_gauge' && quantidade[16] || chip == 'system_fishing_spots'
                && quantidade[17] || chip == 'system_sound_waves' && quantidade[18]) {

                alert('Você não pode ter mais de um deste mesmo chip');

        } else {
                chip == 'attack_continuous_combo' ? quantidade[0]++ : chip == 'support_auto-collect_items' ? quantidade[1]++ : chip == 'support_item_scan' ? quantidade[2]++ :
                chip == 'support_evasive_system' ? quantidade[3]++ : chip == 'support_bullet_detonation' ? quantidade[4]++ : chip == 'hacking_death_rattle' ? quantidade[5]++ :
                chip == 'system_os_chip' ? quantidade[6]++ : chip == 'system_hp_gauge' ? quantidade[7]++ : chip == 'system_skill_gauge' ? quantidade[8]++ : chip == 'system_enemy_data' ? quantidade[9]++ :
                chip == 'system_mini-map' ? quantidade[10]++ : chip == 'system_objectives' ? quantidade[11]++ : chip == 'system_text_log' ? quantidade[12]++ : chip == 'system_save_points' ? quantidade[13]++ :
                chip == 'system_damage_values' ? quantidade[14]++ : chip == 'system_control' ? quantidade[15]++ : chip == 'system_exp_gauge' ? quantidade[16]++ : chip == 'system_fishing_spots' ? quantidade[17]++ :
                chip == 'system_sound_waves' ? quantidade[18]++ : '';

                var chip_elemento = document.getElementById(chip);  // Pegando o numero de slots que o chip vai ocupar
                var slots = chip_elemento.children[2].innerHTML;
                slots = slots.replace(/(\[)|(\])/g, '');//Tirando '[]'
                var ocupar = slots * 4;               // Convertendo o numero de slots para pixel
                var slot = 512;                      // O chip_slot tem 128 slots a altura da div é 512px o que faz que 1 slot seja equivalente a 4px
                var classe = 0;

                if (slot - ocupado < ocupar) {  //Checando se o chip pode ser adicionado
                        alert('Não é posivel adicionar esse chip');

                } else if (chip == 'attack_continuous_combo' || chip == 'support_auto-collect_items' || chip == 'support_item_scan' || chip == 'support_evasive_system' || chip == 'support_bullet_detonation'
                        || chip == 'hacking_death_rattle' || chip == 'system_os_chip' || chip == 'system_hp_gauge' || chip == 'system_skill_gauge' || chip == 'system_enemy_data'
                        || chip == 'system_mini-map' || chip == 'system_objectives' || chip == 'system_text_log' || chip == 'system_save_points' || chip == 'system_damage_values'
                        || chip == 'system_control' || chip == 'system_exp_gauge' || chip == 'system_fishing_spots' || chip == 'system_sound_waves') {

                        // Dando a classe para o chip e adicionando na variavel do gráfico
                        chip_elemento.className == 'botao system' ? (classe = 'system', system++) : chip_elemento.className == 'botao attack' ? (classe = 'attack', attack++) : chip_elemento.className == 'botao defense' ?
                        (classe = 'defense', defense++) : chip_elemento.className == 'botao support' ? (classe = 'support', support++) : chip_elemento.className == 'botao hacking' ? (classe = 'hacking', hacking++) : '';

                        tamanho.innerHTML += `<div class="${classe}" id="${chip}1" style="height:${ocupar}px;" onclick="remover(this.id)" 
                        onmouseover="mostrar(this.id)" onmouseout="esconder(this.id)"><span class='desc'>${chip.replace(/_/g, ' ')} [${slots}]</span></div>`;
                        ocupado = ocupado + ocupar;     // Adicionando o tamanho em pixel na div dentro do slot
                        tamanho.style.height = `${ocupado}px`;

                } else {

                        // Dando a classe para o chip e adicionando na variavel do gráfico
                        chip_elemento.className == 'botao system' ? (classe = 'system', system++) : chip_elemento.className == 'botao attack' ? (classe = 'attack', attack++) : chip_elemento.className == 'botao defense' ?
                        (classe = 'defense', defense++) : chip_elemento.className == 'botao support' ? (classe = 'support', support++) : chip_elemento.className == 'botao hacking' ? (classe = 'hacking', hacking++) : '';
                        
                        numero++;
                        tamanho.innerHTML += `<div class="${classe}" id="${chip}${numero}" style="height:${ocupar}px;" onclick="remover(this.id)" onmouseover="mostrar(this.id)" onmouseout="esconder(this.id)"><span class='desc'>${chip.replace(/_/g, ' ')} [${slots}]</span></div>`;
                        ocupado = ocupado + ocupar;
                        tamanho.style.height = `${ocupado}px`;

                }
                info_slot = ocupado / 4;   // Convertendo o pixel para slot
                div_info_slot.innerHTML = `Slots em uso: ${info_slot}/128`;
        }

}
function remover(chip) {                //Função para remover chip do slot
        // Checagem dos chips que não podem se repetir
        chip == 'attack_continuous_combo1' ? quantidade[0]-- : chip == 'support_auto-collect_items1' ? quantidade[1]-- : chip == 'support_item_scan1' ? quantidade[2]-- :
        chip == 'support_evasive_system1' ? quantidade[3]-- : chip == 'support_bullet_detonation1' ? quantidade[4]-- : chip == 'hacking_death_rattle1' ? quantidade[5]-- :
        chip == 'system_os_chip1' ? quantidade[6]-- : chip == 'system_hp_gauge1' ? quantidade[7]-- : chip == 'system_skill_gauge1' ? quantidade[8]-- : chip == 'system_enemy_data1' ? quantidade[9]-- :
        chip == 'system_mini-map1' ? quantidade[10]-- : chip == 'system_objectives1' ? quantidade[11]-- : chip == 'system_text_log1' ? quantidade[12]-- : chip == 'system_save_points1' ? quantidade[13]-- :
        chip == 'system_damage_values1' ? quantidade[14]-- : chip == 'system_control1' ? quantidade[15]-- : chip == 'system_exp_gauge1' ? quantidade[16]-- : chip == 'system_fishing_spots1' ? quantidade[17]-- :
        chip == 'system_sound_waves1' ? quantidade[18]-- : '';

        tirar = document.getElementById(chip);

        tirar.className == 'system' ? system-- : tirar.className == 'attack' ? attack-- : tirar.className == 'defense' ? defense-- : tirar.className == 'support'
        ? support-- : tirar.className == 'hacking' ? hacking-- : ''; // Removendo da variavel do gráfico de acordo com a classe

        parentElem = tirar.parentNode;          // Descobrindo o elemento pai para poder remover o elemento filho que foi clicado
        parentElem.removeChild(tirar);

        altura = tirar.style.height;
        formatado = Number(altura.replace(/px/i, '')); //Substituindo 'px' por nada, o 'i' é para ignorar a diferença de maiuscula e minuscula
        ocupado = ocupado - formatado;

        tamanho.style.height = `${ocupado}px`;

        info_slot = ocupado / 4;
        div_info_slot.innerHTML = `Slots em uso: ${info_slot}/128`;
}

function mostrar(x) {                   //Mostrar o nome dos chips no slot
        x = document.getElementById(x);
        x.children[0].style.display = 'block';    // 0 é a span dentro da div
}

function esconder(x) {                  //Esconder o nome dos chips no slot
        x = document.getElementById(x);
        x.children[0].style.display = 'none';
}

function info_show(det) {               //Mostrar os efeitos dos chips
        det == 'system_os_chip' ? os_info.style.display = 'block' : det == 'system_hp_gauge' ? hp_gauge_info.style.display = 'block' : det == 'system_skill_gauge'
        ? skill_gauge_info.style.display = 'block' : det == 'system_enemy_data' ? enemy_data_info.style.display = 'block' : det == 'system_mini-map'
        ? mini_map_info.style.display = 'block' : det == 'system_objectives' ? objectives_info.style.display = 'block' : det == 'system_text_log'
        ? text_log_info.style.display = 'block' : det == 'system_save_points' ? save_points_info.style.display = 'block' : det == 'system_damage_values'
        ? damage_values_info.style.display = 'block' : det == 'system_control' ? control_info.style.display = 'block' : det == 'system_exp_gauge'
        ? exp_gauge_info.style.display = 'block' : det == 'system_fishing_spots' ? fishing_spots_info.style.display = 'block' : det == 'system_sound_waves'
        ? sound_waves_info.style.display = 'block' : det == 'attack_charge_attack' ? charge_attack_info.style.display = 'block' : det == 'attack_counter'
        ? counter_info.style.display = 'block' : det == 'attack_critical_up' ? critical_up_info.style.display = 'block' : det == 'attack_down-attack_up'
        ? down_attack_up_info.style.display = 'block' : det == 'attack_last_stand' ? last_stand_info.style.display = 'block' : det == 'attack_ranged_attack_up'
        ? ranged_attack_up_info.style.display = 'block' : det == 'attack_shockwave' ? shockwave_info.style.display = 'block' : det == 'attack_weapon_attack_up'
        ? weapon_attack_up_info.style.display = 'block' : det == 'attack_continuous_combo' ? continuous_combo_info.style.display = 'block' : det == 'defense_anti_chain_damage'
        ? anti_chain_damage_info.style.display = 'block' : det == 'defense_auto-heal' ? auto_heal_info.style.display = 'block' : det == 'defense_damage_absorb'
        ? damage_absorb_info.style.display = 'block' : det == 'defense_deadly_heal' ? deadly_heal_info.style.display = 'block' : det == 'defense_max_hp_up'
        ? max_hp_up_info.style.display = 'block' : det == 'defense_melee_defense' ? melee_defense_info.style.display = 'block' : det == 'defense_offensive_heal'
        ? offensive_heal_info.style.display = 'block' : det == 'defense_ranged_defense' ? ranged_defense_info.style.display = 'block' : det == 'defense_reset'
        ? reset_info.style.display = 'block' : det == 'defense_resilience' ? resilience_info.style.display = 'block' : det == 'support_auto-use_item'
        ? auto_use_item_info.style.display = 'block' : det == 'support_drop_rate_up' ? drop_rate_up_info.style.display = 'block' : det == 'support_exp_gain_up'
        ? exp_gain_up_info.style.display = 'block' : det == 'support_evade_range_up' ? evade_range_up_info.style.display = 'block' : det == 'support_fast_cooldown'
        ? fast_cooldown_info.style.display = 'block' : det == 'support_moving_speed_up' ? moving_speed_up_info.style.display = 'block' : det == 'support_overclock'
        ? overclock_info.style.display = 'block' : det == 'support_taunt_up' ? taunt_up_info.style.display = 'block' : det == 'support_vengeance'
        ? vengeance_info.style.display = 'block' : det == 'support_auto-collect_items' ? auto_collect_items_info.style.display = 'block' : det == 'support_item_scan'
        ? item_scan_info.style.display = 'block' : det == 'support_evasive_system' ? evasive_system_info.style.display = 'block' : det == 'support_bullet_detonation'
        ? bullet_detonation_info.style.display = 'block' : det == 'hacking_combust' ? combust_info.style.display = 'block' : det == 'hacking_heal_drops_up'
        ? heal_drops_up_info.style.display = 'block' : det == 'hacking_hijack_boost' ? hijack_boost_info.style.display = 'block' : det == 'hacking_stun'
        ? stun_info.style.display = 'block' : det == 'hacking_death_rattle' ? death_rattle_info.style.display = 'block' : '';
}

function info_hide(det) {               //Esconder os efeitos dos chips
        det == 'system_os_chip' ? os_info.style.display = 'none' : det == 'system_hp_gauge' ? hp_gauge_info.style.display = 'none' : det == 'system_skill_gauge'
        ? skill_gauge_info.style.display = 'none' : det == 'system_enemy_data' ? enemy_data_info.style.display = 'none' : det == 'system_mini-map'
        ? mini_map_info.style.display = 'none' : det == 'system_objectives' ? objectives_info.style.display = 'none' : det == 'system_text_log'
        ? text_log_info.style.display = 'none' : det == 'system_save_points' ? save_points_info.style.display = 'none' : det == 'system_damage_values'
        ? damage_values_info.style.display = 'none' : det == 'system_control' ? control_info.style.display = 'none' : det == 'system_exp_gauge'
        ? exp_gauge_info.style.display = 'none' : det == 'system_fishing_spots' ? fishing_spots_info.style.display = 'none' : det == 'system_sound_waves'
        ? sound_waves_info.style.display = 'none' : det == 'attack_charge_attack' ? charge_attack_info.style.display = 'none' : det == 'attack_counter'
        ? counter_info.style.display = 'none' : det == 'attack_critical_up' ? critical_up_info.style.display = 'none' : det == 'attack_down-attack_up'
        ? down_attack_up_info.style.display = 'none' : det == 'attack_last_stand' ? last_stand_info.style.display = 'none' : det == 'attack_ranged_attack_up'
        ? ranged_attack_up_info.style.display = 'none' : det == 'attack_shockwave' ? shockwave_info.style.display = 'none' : det == 'attack_weapon_attack_up'
        ? weapon_attack_up_info.style.display = 'none' : det == 'attack_continuous_combo' ? continuous_combo_info.style.display = 'none' : det == 'defense_anti_chain_damage'
        ? anti_chain_damage_info.style.display = 'none' : det == 'defense_auto-heal' ? auto_heal_info.style.display = 'none' : det == 'defense_damage_absorb'
        ? damage_absorb_info.style.display = 'none' : det == 'defense_deadly_heal' ? deadly_heal_info.style.display = 'none' : det == 'defense_max_hp_up'
        ? max_hp_up_info.style.display = 'none' : det == 'defense_melee_defense' ? melee_defense_info.style.display = 'none' : det == 'defense_offensive_heal'
        ? offensive_heal_info.style.display = 'none' : det == 'defense_ranged_defense' ? ranged_defense_info.style.display = 'none' : det == 'defense_reset'
        ? reset_info.style.display = 'none' : det == 'defense_resilience' ? resilience_info.style.display = 'none' : det == 'support_auto-use_item'
        ? auto_use_item_info.style.display = 'none' : det == 'support_drop_rate_up' ? drop_rate_up_info.style.display = 'none' : det == 'support_exp_gain_up'
        ? exp_gain_up_info.style.display = 'none' : det == 'support_evade_range_up' ? evade_range_up_info.style.display = 'none' : det == 'support_fast_cooldown'
        ? fast_cooldown_info.style.display = 'none' : det == 'support_moving_speed_up' ? moving_speed_up_info.style.display = 'none' : det == 'support_overclock'
        ? overclock_info.style.display = 'none' : det == 'support_taunt_up' ? taunt_up_info.style.display = 'none' : det == 'support_vengeance'
        ? vengeance_info.style.display = 'none' : det == 'support_auto-collect_items' ? auto_collect_items_info.style.display = 'none' : det == 'support_item_scan'
        ? item_scan_info.style.display = 'none' : det == 'support_evasive_system' ? evasive_system_info.style.display = 'none' : det == 'support_bullet_detonation'
        ? bullet_detonation_info.style.display = 'none' : det == 'hacking_combust' ? combust_info.style.display = 'none' : det == 'hacking_heal_drops_up'
        ? heal_drops_up_info.style.display = 'none' : det == 'hacking_hijack_boost' ? hijack_boost_info.style.display = 'none' : det == 'hacking_stun'
        ? stun_info.style.display = 'none' : det == 'hacking_death_rattle' ? death_rattle_info.style.display = 'none' : '';
}


function menu(pressionar) {             //Mostrar e esconder as opções de chips
        visivel = document.getElementById(pressionar);

        if (visivel == but_system) {
                system_menu.style.display = 'block';
                attack_menu.style.display = 'none';
                defense_menu.style.display = 'none';
                support_menu.style.display = 'none';
                hacking_menu.style.display = 'none';
                but_system.style.color = 'rgb(173,169,151)';
                but_system.style.background = '#534f46';
                but_defense.style.color = '';
                but_defense.style.background = '';
                but_hacking.style.color = '';
                but_hacking.style.background = '';
                but_support.style.color = '';
                but_support.style.background = '';
                but_attack.style.color = '';
                but_attack.style.background = '';
        } else if (visivel == but_attack) {
                system_menu.style.display = 'none';
                attack_menu.style.display = 'block';
                defense_menu.style.display = 'none';
                support_menu.style.display = 'none';
                hacking_menu.style.display = 'none';
                but_attack.style.color = 'rgb(173,169,151)';
                but_attack.style.background = '#534f46';
                but_system.style.color = '';
                but_system.style.background = '';
                but_defense.style.color = '';
                but_defense.style.background = '';
                but_hacking.style.color = '';
                but_hacking.style.background = '';
                but_support.style.color = '';
                but_support.style.background = '';
        } else if (visivel == but_defense) {
                system_menu.style.display = 'none';
                attack_menu.style.display = 'none';
                defense_menu.style.display = 'block';
                support_menu.style.display = 'none';
                hacking_menu.style.display = 'none';
                but_defense.style.color = 'rgb(173,169,151)';
                but_defense.style.background = '#534f46';
                but_system.style.color = '';
                but_system.style.background = '';
                but_attack.style.color = '';
                but_attack.style.background = '';
                but_hacking.style.color = '';
                but_hacking.style.background = '';
                but_support.style.color = '';
                but_support.style.background = '';
        } else if (visivel == but_support) {
                system_menu.style.display = 'none';
                attack_menu.style.display = 'none';
                defense_menu.style.display = 'none';
                support_menu.style.display = 'block';
                hacking_menu.style.display = 'none';
                but_support.style.color = 'rgb(173,169,151)';
                but_support.style.background = '#534f46';
                but_system.style.color = '';
                but_system.style.background = '';
                but_attack.style.color = '';
                but_attack.style.background = '';
                but_defense.style.color = '';
                but_defense.style.background = '';
                but_hacking.style.color = '';
                but_hacking.style.background = '';
        } else {
                system_menu.style.display = 'none';
                attack_menu.style.display = 'none';
                defense_menu.style.display = 'none';
                support_menu.style.display = 'none';
                hacking_menu.style.display = 'block';
                but_hacking.style.color = 'rgb(173,169,151)';
                but_hacking.style.background = '#534f46';
                but_system.style.color = '';
                but_system.style.background = '';
                but_attack.style.color = '';
                but_attack.style.background = '';
                but_defense.style.color = '';
                but_defense.style.background = '';
                but_support.style.color = '';
                but_support.style.background = '';
        }
}



const data = {
        labels: [
                'System',
                'Attack',
                'Defense',
                'Support',
                'Hacking'
        ],
        datasets: [{
                label: 'Chips Equipados',
                data: [system, attack, defense, support, hacking],
                fill: true,
                backgroundColor: 'rgb(173,169,151, 0.2)',
                borderColor: 'rgb(83, 79, 70)',
                pointBackgroundColor: 'rgb(173,169,151)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
};

const config = {
        type: 'radar',
        data: data,
        options: {
                scales: {
                        r: {
                                angleLines: {
                                        display: false
                                },
                                suggestedMin: 0,
                                suggestedMax: 10
                        }
                },
                elements: {
                        line: {
                                borderWidth: 3
                        }
                }
        },
};
var myChart = new Chart(
        document.getElementById('myChart'),
        config
);

setInterval(function atualizar_chart() {
        data.datasets[0].data = [system, attack, defense, support, hacking];
        myChart.update();
}, 500)

module.exports = (system,attack,defense,support,hacking);