
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

var exploitForPort={};
exploitForPort['21/tcp']='brute_force';
exploitForPort['25/tcp']='directory_harvest';
exploitForPort['80/tcp']='sql_injection';
exploitForPort['111/tcp']='DDoS_attack';
exploitForPort['135/tcp']='DoS_attack';

exploitForPort['22/tcp']='user_auth';
exploitForPort['53/tcp']='DNS_zone_transfer';
exploitForPort['110/tcp']='pop3_version';
exploitForPort['139/tcp']='DCOM_buffer_overrun';
exploitForPort['443/tcp']='drown_attack';
exploitForPort['445/tcp']='windows_null_session';
exploitForPort['3306/tcp']='remove_auth';
exploitForPort['5800/tcp']='remote_auth';
exploitForPort['5900/tcp']='remote_auth';
exploitForPort['6112/tcp']='remote_exploit_buffer_overflow';
exploitForPort['8080/tcp']='url_decoder';

var serviceForPort={};
serviceForPort['21/tcp']='ftp';
serviceForPort['25/tcp']='smtp';
serviceForPort['80/tcp']='http';
serviceForPort['111/tcp']='rpcbind';
serviceForPort['135/tcp']='msrpc';

serviceForPort['22/tcp']='ssh';
serviceForPort['53/tcp']='domain';
serviceForPort['110/tcp']='pop3';
serviceForPort['139/tcp']='netbios-ssn';
serviceForPort['443/tcp']='https';
serviceForPort['445/tcp']='microsoft-ds';
serviceForPort['3306/tcp']='MySql';
serviceForPort['5800/tcp']='vncc http';
serviceForPort['5900/tcp']='vncc http';
serviceForPort['6112/tcp']='dtspc';
serviceForPort['8080/tcp']='apache';
var hpPorts=['21/tcp','25/tcp','80/tcp','111/tcp','135/tcp'];
var normPorts=['22/tcp','53/tcp','110/tcp','139/tcp','443/tcp','445/tcp','3306/tcp','5800/tcp','5900/tcp','6112/tcp','8080/tcp'];
var normOpSys = ['OpenBSD', 'Linux','Mac OS X','Windows 8'];
var hpOpSys=['Windows Server 2003','Windows XP','HP-UX 11i','Solaris'];

var res = [];

var realPercent = 100;
var filesNum = 20;
var realNum = Math.floor(filesNum*realPercent/100); 

var realPerc = 50;
var totalSystems = 40;
var realSysNum = Math.floor(totalSystems*realPerc/100); 

for(var i=1;i<=totalSystems;i++)
{
	res.push(i);
}

var hpSys={};
var uSys={};


for(var k in res){
	hpPorts=shuffle(hpPorts);
	hpOpSys=shuffle(hpOpSys);
	var hpSPorts=[hpPorts[0],hpPorts[1],hpPorts[2],hpPorts[3]];
	var hpExploits=[exploitForPort[hpSPorts[0]],exploitForPort[hpSPorts[1]],exploitForPort[hpSPorts[2]],exploitForPort[hpSPorts[3]]];
	hpSys[res[k]] = {"OS":hpOpSys[0],"ports":hpSPorts,"exploit":hpExploits};
}
for(key in hpSys)
{
 	$('#net_data').append('"'+key+'" : ' + JSON.stringify(hpSys[key])+',<br/>');
}

$('#net_data').append('<br/><br/>');
for(var k in res){
	normPorts=shuffle(normPorts);
	normOpSys=shuffle(normOpSys);
	var uSPorts=[normPorts[0],normPorts[1],normPorts[2],normPorts[3]];
	var uExploits=[exploitForPort[uSPorts[0]],exploitForPort[uSPorts[1]],exploitForPort[uSPorts[2]],exploitForPort[uSPorts[3]]];
	uSys[res[k]] = {"OS":normOpSys[0],"ports":uSPorts,"exploit":uExploits};
}
for(key in uSys)
{
	$('#net_data').append('"'+key+'" : ' + JSON.stringify(uSys[key])+',<br/>');
}
$('#net_data').append('<br/><br/>');

var sys=[];

for (var sysNo=1; sysNo<=totalSystems; sysNo++) {  
		sys.push(sysNo);
}

var fileArray = ['in_ante_vestibulum.txt', 'cras_in_purus.txt', 'amet.txt', 'ultrices_erat_tortor.txt', 'at_velit_vivamus.txt', 'eleifend_luctus.txt', 'nullam.txt', 'nullam_varius.txt', 'tellus.txt', 'ut_nulla_sed.txt', 'orci_mauris.txt', 'quam_nec.txt', 'est.txt', 'nonummy.txt', 'hac.txt', 'pellentesque.txt', 'dictumst_etiam_faucibus.txt', 'purus.txt', 'viverra_diam_vitae.txt', 'ipsum_dolor_sit.txt', 'sit_amet_sapien.txt', 'tincidunt.txt', 'rutrum_ac.txt', 'nunc_nisl_duis.txt', 'non_velit_donec.txt', 'congue_eget.txt', 'ultrices.txt', 'feugiat_non.txt', 'cubilia_curae.txt', 'fusce_congue_diam.txt', 'nisl.txt', 'feugiat_et_eros.txt', 'ligula_suspendisse_ornare.txt', 'turpis_a.txt', 'justo_in.txt', 'orci_nullam.txt', 'proin.txt', 'nunc_viverra_dapibus.txt', 'nulla_quisque_arcu.txt', 'eu_est_congue.txt', 'morbi.txt', 'donec.txt', 'purus_eu.txt', 'bibendum.txt', 'sapien_urna_pretium.txt', 'consequat.txt', 'mauris_eget_massa.txt', 'suspendisse.txt', 'aliquet_at_feugiat.txt', 'orci_pede_venenatis.txt', 'iaculis_congue_vivamus.txt', 'nam.txt', 'aenean_auctor_gravida.txt', 'quam.txt', 'quam_fringilla_rhoncus.txt', 'et.txt', 'sapien_iaculis_congue.txt', 'sociis.txt', 'posuere.txt', 'eros_vestibulum_ac.txt', 'odio_curabitur.txt', 'tortor_quis_turpis.txt', 'duis_bibendum.txt', 'in_sagittis_dui.txt', 'orci.txt', 'morbi_ut_odio.txt', 'interdum_mauris_non.txt', 'eu_felis_fusce.txt', 'massa.txt', 'nulla_justo_aliquam.txt', 'eget.txt', 'cursus.txt', 'sollicitudin_ut.txt', 'feugiat.txt', 'convallis.txt', 'euismod.txt', 'platea_dictumst_aliquam.txt', 'a_libero.txt', 'vehicula_condimentum_curabitur.txt', 'nec_nisi_volutpat.txt', 'id.txt', 'sed.txt', 'nullam_porttitor_lacus.txt', 'vivamus_vel_nulla.txt', 'justo_eu.txt', 'enim.txt', 'potenti.txt', 'morbi_a.txt', 'neque.txt', 'leo_pellentesque.txt', 'purus_aliquet_at.txt', 'ligula_in.txt', 'in_hac.txt', 'integer_non.txt', 'eget_elit.txt', 'nisi.txt', 'maecenas_ut.txt', 'cubilia_curae_duis.txt', 'lacus.txt', 'rhoncus_aliquet_pulvinar.txt', 'est_lacinia.txt', 'convallis_tortor_risus.txt', 'suscipit_a.txt', 'sapien_cum_sociis.txt', 'phasellus_in_felis.txt', 'ante_nulla.txt', 'nisl_nunc.txt', 'lobortis_vel_dapibus.txt', 'congue_elementum.txt', 'vel_nisl_duis.txt', 'lobortis_est_phasellus.txt', 'ultrices_mattis.txt', 'praesent_blandit.txt', 'ac_est.txt', 'mollis_molestie.txt', 'odio_consequat_varius.txt', 'tempus.txt', 'ipsum_praesent_blandit.txt', 'diam_vitae_quam.txt', 'viverra_pede_ac.txt', 'nibh_ligula_nec.txt', 'odio_elementum_eu.txt', 'amet_nunc_viverra.txt', 'tortor_risus.txt', 'erat_id.txt', 'integer_ac.txt', 'facilisi_cras.txt', 'massa_donec.txt', 'tortor.txt', 'sem.txt', 'duis.txt', 'nullam_sit.txt', 'nisi_venenatis.txt', 'maecenas.txt', 'congue.txt', 'porta.txt', 'est_risus.txt', 'donec_pharetra.txt', 'nascetur_ridiculus_mus.txt', 'mauris_vulputate_elementum.txt', 'eu_est.txt', 'morbi_vel_lectus.txt', 'dapibus_dolor_vel.txt', 'donec_dapibus.txt', 'ut.txt', 'duis_bibendum_morbi.txt', 'posuere_cubilia.txt', 'ante.txt', 'aliquam_quis.txt', 'augue_luctus.txt', 'magnis.txt', 'in.txt', 'dictumst_morbi.txt', 'fermentum.txt', 'in_tempus.txt', 'iaculis.txt', 'mauris_ullamcorper_purus.txt', 'vitae_consectetuer.txt', 'aliquet_massa_id.txt', 'amet_sem_fusce.txt', 'interdum_mauris.txt', 'tortor_duis_mattis.txt', 'orci_vehicula.txt', 'nec.txt', 'vivamus_in.txt', 'vitae.txt', 'tellus_nulla_ut.txt', 'vel.txt', 'ut_rhoncus.txt', 'sit_amet.txt', 'felis.txt', 'hac_habitasse.txt', 'erat.txt', 'congue_eget_semper.txt', 'laoreet_ut_rhoncus.txt', 'sed_lacus_morbi.txt', 'quis_tortor.txt', 'fusce_consequat.txt', 'eros_elementum_pellentesque.txt', 'condimentum_curabitur.txt', 'mauris_vulputate.txt', 'pellentesque_volutpat.txt', 'dui_luctus_rutrum.txt', 'magnis_dis_parturient.txt', 'elementum.txt', 'blandit.txt', 'ut_mauris.txt', 'libero_nam_dui.txt', 'aliquam_augue_quam.txt', 'dolor_vel_est.txt', 'mauris.txt', 'lorem_vitae_mattis.txt', 'est_congue.txt', 'augue_aliquam.txt', 'ac.txt', 'proin_eu.txt', 'natoque.txt', 'tempus_vivamus.txt', 'aliquet.txt', 'consequat_in.txt'];
fileArray.splice(filesNum);

$('#net_data').append(JSON.stringify(fileArray)+'<br/><br/>');

//var realFiles = Array.from(fileArray);
//var fakeFiles = realFiles.splice(realNum);


for(var i=0;i<=6;i++)
{
	sys = shuffle(sys);
	var real = Array.from(sys);
	var hp = real.splice(realSysNum);

	fileArray = shuffle(fileArray);
	var realFiles = Array.from(fileArray);
	var fakeFiles = realFiles.splice(realNum);

	$('#net_data').append('"real_files" : ' + JSON.stringify(realFiles)+',<br/>');
	$('#net_data').append('"fake_files" : ' + JSON.stringify(fakeFiles)+',<br/>');
	$('#net_data').append('"honeypots":' + JSON.stringify(hp)+',<br/>');
	$('#net_data').append('"real":' + JSON.stringify(real)+',<br/>');
	$('#net_data').append('"all":' + JSON.stringify(sys)+',<br/>');
	$('#net_data').append('<br/><br/>');
}
