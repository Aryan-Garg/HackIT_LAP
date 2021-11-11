
function arrContains(array,elem)
{
			for(var k in array){
					if(array[k]==elem)
							return true;
			}
			return false;
}

var exploitForPort={};
exploitForPort['21/tcp']='brute_force';
exploitForPort['22/tcp']='user_auth';
exploitForPort['25/tcp']='directory_harvest';
exploitForPort['53/tcp']='DNS_zone_transfer';
exploitForPort['80/tcp']='sql_injection';
exploitForPort['110/tcp']='pop3_version';
exploitForPort['111/tcp']='DDoS_attack';
exploitForPort['135/tcp']='DoS_attack';
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
serviceForPort['22/tcp']='ssh';
serviceForPort['25/tcp']='smtp';
serviceForPort['53/tcp']='domain';
serviceForPort['80/tcp']='http';
serviceForPort['110/tcp']='pop3';
serviceForPort['111/tcp']='rpcbind';
serviceForPort['135/tcp']='msrpc';
serviceForPort['139/tcp']='netbios-ssn';
serviceForPort['443/tcp']='https';
serviceForPort['445/tcp']='microsoft-ds';
serviceForPort['3306/tcp']='MySql';
serviceForPort['5800/tcp']='vncc http';
serviceForPort['5900/tcp']='vncc http';
serviceForPort['6112/tcp']='dtspc';
serviceForPort['8080/tcp']='apache';

var fileArray = ["pin.txt","cras_in_purus.txt","amet.txt","ultrices_erat_tortor.txt","at_velit_vivamus.txt","eleifend_luctus.txt","nullam.txt","nullam_varius.txt","tellus.txt","ut_nulla_sed.txt","orci_mauris.txt","quam_nec.txt","est.txt","nonummy.txt","hac.txt","pellentesque.txt","dictumst_etiam_faucibus.txt","purus.txt","viverra_diam_vitae.txt","ipsum_dolor_sit.txt","sit_amet_sapien.txt","tincidunt.txt","rutrum_ac.txt","nunc_nisl_duis.txt","non_velit_donec.txt","congue_eget.txt","ultrices.txt","feugiat_non.txt","cubilia_curae.txt","fusce_congue_diam.txt","nisl.txt","feugiat_et_eros.txt","ligula_suspendisse_ornare.txt","turpis_a.txt","justo_in.txt","orci_nullam.txt","proin.txt","nunc_viverra_dapibus.txt","nulla_quisque_arcu.txt","eu_est_congue.txt","morbi.txt","donec.txt","purus_eu.txt","bibendum.txt","sapien_urna_pretium.txt","consequat.txt","mauris_eget_massa.txt","suspendisse.txt","aliquet_at_feugiat.txt","orci_pede_venenatis.txt"];

var realConf = {
	"1" : {"OS":"Windows 8","ports":["443/tcp","445/tcp","6112/tcp","22/tcp"],"exploit":["drown_attack","windows_null_session","remote_exploit_buffer_overflow","user_auth"]},
	"2" : {"OS":"Mac OS X","ports":["443/tcp","53/tcp","5800/tcp","8080/tcp"],"exploit":["drown_attack","DNS_zone_transfer","remote_auth","url_decoder"]},
	"3" : {"OS":"OpenBSD","ports":["5900/tcp","22/tcp","445/tcp","8080/tcp"],"exploit":["remote_auth","user_auth","windows_null_session","url_decoder"]},
	"4" : {"OS":"Mac OS X","ports":["22/tcp","3306/tcp","445/tcp","443/tcp"],"exploit":["user_auth","remove_auth","windows_null_session","drown_attack"]},
	"5" : {"OS":"Windows 8","ports":["8080/tcp","5800/tcp","110/tcp","443/tcp"],"exploit":["url_decoder","remote_auth","pop3_version","drown_attack"]},
	"6" : {"OS":"Mac OS X","ports":["445/tcp","5900/tcp","6112/tcp","139/tcp"],"exploit":["windows_null_session","remote_auth","remote_exploit_buffer_overflow","DCOM_buffer_overrun"]},
	"7" : {"OS":"Windows 8","ports":["445/tcp","53/tcp","5800/tcp","22/tcp"],"exploit":["windows_null_session","DNS_zone_transfer","remote_auth","user_auth"]},
	"8" : {"OS":"Windows 8","ports":["5800/tcp","53/tcp","6112/tcp","8080/tcp"],"exploit":["remote_auth","DNS_zone_transfer","remote_exploit_buffer_overflow","url_decoder"]},
	"9" : {"OS":"Mac OS X","ports":["6112/tcp","139/tcp","3306/tcp","53/tcp"],"exploit":["remote_exploit_buffer_overflow","DCOM_buffer_overrun","remove_auth","DNS_zone_transfer"]},
	"10" : {"OS":"OpenBSD","ports":["445/tcp","5800/tcp","5900/tcp","110/tcp"],"exploit":["windows_null_session","remote_auth","remote_auth","pop3_version"]},
	"11" : {"OS":"OpenBSD","ports":["443/tcp","53/tcp","3306/tcp","8080/tcp"],"exploit":["drown_attack","DNS_zone_transfer","remove_auth","url_decoder"]},
	"12" : {"OS":"OpenBSD","ports":["22/tcp","8080/tcp","110/tcp","445/tcp"],"exploit":["user_auth","url_decoder","pop3_version","windows_null_session"]},
	"13" : {"OS":"OpenBSD","ports":["6112/tcp","445/tcp","8080/tcp","3306/tcp"],"exploit":["remote_exploit_buffer_overflow","windows_null_session","url_decoder","remove_auth"]},
	"14" : {"OS":"Windows 8","ports":["6112/tcp","3306/tcp","110/tcp","443/tcp"],"exploit":["remote_exploit_buffer_overflow","remove_auth","pop3_version","drown_attack"]},
	"15" : {"OS":"Linux","ports":["53/tcp","445/tcp","139/tcp","22/tcp"],"exploit":["DNS_zone_transfer","windows_null_session","DCOM_buffer_overrun","user_auth"]},
	"16" : {"OS":"Linux","ports":["443/tcp","110/tcp","53/tcp","5800/tcp"],"exploit":["drown_attack","pop3_version","DNS_zone_transfer","remote_auth"]},
	"17" : {"OS":"OpenBSD","ports":["5800/tcp","445/tcp","22/tcp","139/tcp"],"exploit":["remote_auth","windows_null_session","user_auth","DCOM_buffer_overrun"]},
	"18" : {"OS":"Windows 8","ports":["110/tcp","139/tcp","5800/tcp","3306/tcp"],"exploit":["pop3_version","DCOM_buffer_overrun","remote_auth","remove_auth"]},
	"19" : {"OS":"Windows 8","ports":["110/tcp","443/tcp","5900/tcp","139/tcp"],"exploit":["pop3_version","drown_attack","remote_auth","DCOM_buffer_overrun"]},
	"20" : {"OS":"Linux","ports":["445/tcp","3306/tcp","139/tcp","53/tcp"],"exploit":["windows_null_session","remove_auth","DCOM_buffer_overrun","DNS_zone_transfer"]},
	"21" : {"OS":"Windows 8","ports":["110/tcp","139/tcp","8080/tcp","443/tcp"],"exploit":["pop3_version","DCOM_buffer_overrun","url_decoder","drown_attack"]},
	"22" : {"OS":"Mac OS X","ports":["53/tcp","443/tcp","6112/tcp","3306/tcp"],"exploit":["DNS_zone_transfer","drown_attack","remote_exploit_buffer_overflow","remove_auth"]},
	"23" : {"OS":"OpenBSD","ports":["445/tcp","22/tcp","5800/tcp","3306/tcp"],"exploit":["windows_null_session","user_auth","remote_auth","remove_auth"]},
	"24" : {"OS":"Mac OS X","ports":["443/tcp","445/tcp","6112/tcp","139/tcp"],"exploit":["drown_attack","windows_null_session","remote_exploit_buffer_overflow","DCOM_buffer_overrun"]},
	"25" : {"OS":"Windows 8","ports":["110/tcp","3306/tcp","53/tcp","139/tcp"],"exploit":["pop3_version","remove_auth","DNS_zone_transfer","DCOM_buffer_overrun"]},
	"26" : {"OS":"Mac OS X","ports":["445/tcp","443/tcp","110/tcp","5900/tcp"],"exploit":["windows_null_session","drown_attack","pop3_version","remote_auth"]},
	"27" : {"OS":"OpenBSD","ports":["5800/tcp","445/tcp","8080/tcp","110/tcp"],"exploit":["remote_auth","windows_null_session","url_decoder","pop3_version"]},
	"28" : {"OS":"Windows 8","ports":["53/tcp","5900/tcp","22/tcp","445/tcp"],"exploit":["DNS_zone_transfer","remote_auth","user_auth","windows_null_session"]},
	"29" : {"OS":"OpenBSD","ports":["6112/tcp","53/tcp","5800/tcp","22/tcp"],"exploit":["remote_exploit_buffer_overflow","DNS_zone_transfer","remote_auth","user_auth"]},
	"30" : {"OS":"Mac OS X","ports":["443/tcp","8080/tcp","5800/tcp","22/tcp"],"exploit":["drown_attack","url_decoder","remote_auth","user_auth"]},
	"31" : {"OS":"Linux","ports":["445/tcp","6112/tcp","139/tcp","5800/tcp"],"exploit":["windows_null_session","remote_exploit_buffer_overflow","DCOM_buffer_overrun","remote_auth"]},
	"32" : {"OS":"Mac OS X","ports":["22/tcp","53/tcp","445/tcp","110/tcp"],"exploit":["user_auth","DNS_zone_transfer","windows_null_session","pop3_version"]},
	"33" : {"OS":"Mac OS X","ports":["6112/tcp","445/tcp","110/tcp","139/tcp"],"exploit":["remote_exploit_buffer_overflow","windows_null_session","pop3_version","DCOM_buffer_overrun"]},
	"34" : {"OS":"Linux","ports":["443/tcp","139/tcp","5800/tcp","6112/tcp"],"exploit":["drown_attack","DCOM_buffer_overrun","remote_auth","remote_exploit_buffer_overflow"]},
	"35" : {"OS":"OpenBSD","ports":["110/tcp","445/tcp","443/tcp","53/tcp"],"exploit":["pop3_version","windows_null_session","drown_attack","DNS_zone_transfer"]},
	"36" : {"OS":"Mac OS X","ports":["5900/tcp","53/tcp","5800/tcp","6112/tcp"],"exploit":["remote_auth","DNS_zone_transfer","remote_auth","remote_exploit_buffer_overflow"]},
	"37" : {"OS":"OpenBSD","ports":["443/tcp","110/tcp","445/tcp","22/tcp"],"exploit":["drown_attack","pop3_version","windows_null_session","user_auth"]},
	"38" : {"OS":"OpenBSD","ports":["139/tcp","443/tcp","8080/tcp","5900/tcp"],"exploit":["DCOM_buffer_overrun","drown_attack","url_decoder","remote_auth"]},
	"39" : {"OS":"Mac OS X","ports":["443/tcp","139/tcp","110/tcp","5800/tcp"],"exploit":["drown_attack","DCOM_buffer_overrun","pop3_version","remote_auth"]},
	"40" : {"OS":"Linux","ports":["6112/tcp","443/tcp","110/tcp","53/tcp"],"exploit":["remote_exploit_buffer_overflow","drown_attack","pop3_version","DNS_zone_transfer"]}
};

var fakeConf = {
	"1" : {"OS":"Solaris","ports":["25/tcp","21/tcp","111/tcp","135/tcp"],"exploit":["directory_harvest","brute_force","DDoS_attack","DoS_attack"]},
	"2" : {"OS":"HP-UX 11i","ports":["135/tcp","111/tcp","25/tcp","80/tcp"],"exploit":["DoS_attack","DDoS_attack","directory_harvest","sql_injection"]},
	"3" : {"OS":"HP-UX 11i","ports":["80/tcp","111/tcp","21/tcp","25/tcp"],"exploit":["sql_injection","DDoS_attack","brute_force","directory_harvest"]},
	"4" : {"OS":"Windows Server 2003","ports":["111/tcp","21/tcp","135/tcp","80/tcp"],"exploit":["DDoS_attack","brute_force","DoS_attack","sql_injection"]},
	"5" : {"OS":"HP-UX 11i","ports":["80/tcp","21/tcp","111/tcp","25/tcp"],"exploit":["sql_injection","brute_force","DDoS_attack","directory_harvest"]},
	"6" : {"OS":"Windows Server 2003","ports":["135/tcp","80/tcp","111/tcp","21/tcp"],"exploit":["DoS_attack","sql_injection","DDoS_attack","brute_force"]},
	"7" : {"OS":"HP-UX 11i","ports":["80/tcp","25/tcp","21/tcp","111/tcp"],"exploit":["sql_injection","directory_harvest","brute_force","DDoS_attack"]},
	"8" : {"OS":"HP-UX 11i","ports":["135/tcp","111/tcp","25/tcp","21/tcp"],"exploit":["DoS_attack","DDoS_attack","directory_harvest","brute_force"]},
	"9" : {"OS":"Solaris","ports":["21/tcp","111/tcp","25/tcp","135/tcp"],"exploit":["brute_force","DDoS_attack","directory_harvest","DoS_attack"]},
	"10" : {"OS":"HP-UX 11i","ports":["135/tcp","111/tcp","21/tcp","80/tcp"],"exploit":["DoS_attack","DDoS_attack","brute_force","sql_injection"]},
	"11" : {"OS":"Windows Server 2003","ports":["21/tcp","25/tcp","80/tcp","135/tcp"],"exploit":["brute_force","directory_harvest","sql_injection","DoS_attack"]},
	"12" : {"OS":"HP-UX 11i","ports":["111/tcp","135/tcp","21/tcp","80/tcp"],"exploit":["DDoS_attack","DoS_attack","brute_force","sql_injection"]},
	"13" : {"OS":"Windows XP","ports":["135/tcp","21/tcp","111/tcp","80/tcp"],"exploit":["DoS_attack","brute_force","DDoS_attack","sql_injection"]},
	"14" : {"OS":"HP-UX 11i","ports":["135/tcp","21/tcp","111/tcp","25/tcp"],"exploit":["DoS_attack","brute_force","DDoS_attack","directory_harvest"]},
	"15" : {"OS":"Windows XP","ports":["25/tcp","80/tcp","111/tcp","21/tcp"],"exploit":["directory_harvest","sql_injection","DDoS_attack","brute_force"]},
	"16" : {"OS":"Solaris","ports":["21/tcp","80/tcp","111/tcp","25/tcp"],"exploit":["brute_force","sql_injection","DDoS_attack","directory_harvest"]},
	"17" : {"OS":"Windows Server 2003","ports":["111/tcp","21/tcp","25/tcp","135/tcp"],"exploit":["DDoS_attack","brute_force","directory_harvest","DoS_attack"]},
	"18" : {"OS":"Solaris","ports":["80/tcp","135/tcp","21/tcp","25/tcp"],"exploit":["sql_injection","DoS_attack","brute_force","directory_harvest"]},
	"19" : {"OS":"Solaris","ports":["80/tcp","111/tcp","135/tcp","21/tcp"],"exploit":["sql_injection","DDoS_attack","DoS_attack","brute_force"]},
	"20" : {"OS":"Windows XP","ports":["111/tcp","135/tcp","80/tcp","25/tcp"],"exploit":["DDoS_attack","DoS_attack","sql_injection","directory_harvest"]},
	"21" : {"OS":"Solaris","ports":["25/tcp","80/tcp","135/tcp","21/tcp"],"exploit":["directory_harvest","sql_injection","DoS_attack","brute_force"]},
	"22" : {"OS":"HP-UX 11i","ports":["111/tcp","80/tcp","25/tcp","21/tcp"],"exploit":["DDoS_attack","sql_injection","directory_harvest","brute_force"]},
	"23" : {"OS":"Solaris","ports":["21/tcp","25/tcp","80/tcp","135/tcp"],"exploit":["brute_force","directory_harvest","sql_injection","DoS_attack"]},
	"24" : {"OS":"HP-UX 11i","ports":["111/tcp","135/tcp","21/tcp","80/tcp"],"exploit":["DDoS_attack","DoS_attack","brute_force","sql_injection"]},
	"25" : {"OS":"Solaris","ports":["111/tcp","21/tcp","25/tcp","80/tcp"],"exploit":["DDoS_attack","brute_force","directory_harvest","sql_injection"]},
	"26" : {"OS":"Windows Server 2003","ports":["21/tcp","135/tcp","80/tcp","111/tcp"],"exploit":["brute_force","DoS_attack","sql_injection","DDoS_attack"]},
	"27" : {"OS":"HP-UX 11i","ports":["135/tcp","25/tcp","111/tcp","21/tcp"],"exploit":["DoS_attack","directory_harvest","DDoS_attack","brute_force"]},
	"28" : {"OS":"HP-UX 11i","ports":["111/tcp","21/tcp","80/tcp","135/tcp"],"exploit":["DDoS_attack","brute_force","sql_injection","DoS_attack"]},
	"29" : {"OS":"Solaris","ports":["21/tcp","80/tcp","111/tcp","25/tcp"],"exploit":["brute_force","sql_injection","DDoS_attack","directory_harvest"]},
	"30" : {"OS":"HP-UX 11i","ports":["135/tcp","25/tcp","111/tcp","21/tcp"],"exploit":["DoS_attack","directory_harvest","DDoS_attack","brute_force"]},
	"31" : {"OS":"HP-UX 11i","ports":["80/tcp","111/tcp","25/tcp","21/tcp"],"exploit":["sql_injection","DDoS_attack","directory_harvest","brute_force"]},
	"32" : {"OS":"Windows Server 2003","ports":["111/tcp","135/tcp","25/tcp","80/tcp"],"exploit":["DDoS_attack","DoS_attack","directory_harvest","sql_injection"]},
	"33" : {"OS":"HP-UX 11i","ports":["21/tcp","135/tcp","25/tcp","80/tcp"],"exploit":["brute_force","DoS_attack","directory_harvest","sql_injection"]},
	"34" : {"OS":"Windows Server 2003","ports":["21/tcp","135/tcp","25/tcp","111/tcp"],"exploit":["brute_force","DoS_attack","directory_harvest","DDoS_attack"]},
	"35" : {"OS":"HP-UX 11i","ports":["21/tcp","135/tcp","80/tcp","111/tcp"],"exploit":["brute_force","DoS_attack","sql_injection","DDoS_attack"]},
	"36" : {"OS":"Solaris","ports":["25/tcp","135/tcp","21/tcp","80/tcp"],"exploit":["directory_harvest","DoS_attack","brute_force","sql_injection"]},
	"37" : {"OS":"Windows Server 2003","ports":["135/tcp","25/tcp","21/tcp","80/tcp"],"exploit":["DoS_attack","directory_harvest","brute_force","sql_injection"]},
	"38" : {"OS":"HP-UX 11i","ports":["111/tcp","25/tcp","21/tcp","135/tcp"],"exploit":["DDoS_attack","directory_harvest","brute_force","DoS_attack"]},
	"39" : {"OS":"HP-UX 11i","ports":["135/tcp","111/tcp","21/tcp","80/tcp"],"exploit":["DoS_attack","DDoS_attack","brute_force","sql_injection"]},
	"40" : {"OS":"Windows Server 2003","ports":["80/tcp","135/tcp","21/tcp","111/tcp"],"exploit":["sql_injection","DoS_attack","brute_force","DDoS_attack"]}
};

var sysData = [];
var round0 =
{
	"real_files" : ["orci_mauris.txt","quam_nec.txt","hac.txt","dictumst_etiam_faucibus.txt","pellentesque.txt","viverra_diam_vitae.txt","amet.txt","ipsum_dolor_sit.txt","est.txt","nullam.txt","nonummy.txt","ut_nulla_sed.txt","at_velit_vivamus.txt","cras_in_purus.txt","nullam_varius.txt","eleifend_luctus.txt","purus.txt","pin.txt","ultrices_erat_tortor.txt","tellus.txt","sit_amet_sapien.txt","tincidunt.txt","rutrum_ac.txt","nunc_nisl_duis.txt","non_velit_donec.txt","congue_eget.txt","ultrices.txt","feugiat_non.txt","cubilia_curae.txt","fusce_congue_diam.txt","nisl.txt","feugiat_et_eros.txt","ligula_suspendisse_ornare.txt","turpis_a.txt","justo_in.txt","orci_nullam.txt","proin.txt","nunc_viverra_dapibus.txt","nulla_quisque_arcu.txt","eu_est_congue.txt","morbi.txt","donec.txt","purus_eu.txt","bibendum.txt","sapien_urna_pretium.txt","consequat.txt","mauris_eget_massa.txt","suspendisse.txt","aliquet_at_feugiat.txt","orci_pede_venenatis.txt"],
	"fake_files" : [],
	"honeypots":[33,31,12,35,34,39,38,9,5,13,10,25,27,3,14,28,19,16,21,29],
	"real":[17,6,26,36,40,37,1,15,30,23,20,32,7,2,8,24,22,18,4,11],
	"all":[17,6,26,36,40,37,1,15,30,23,20,32,7,2,8,24,22,18,4,11,33,31,12,35,34,39,38,9,5,13,10,25,27,3,14,28,19,16,21,29]
}
sysData.push(round0);

var round1 = {
	"real_files" : ["cras_in_purus.txt","nullam_varius.txt","nonummy.txt","quam_nec.txt","ultrices_erat_tortor.txt","tellus.txt","hac.txt","orci_mauris.txt","amet.txt","at_velit_vivamus.txt","viverra_diam_vitae.txt","est.txt","pellentesque.txt","pin.txt","eleifend_luctus.txt","dictumst_etiam_faucibus.txt","ut_nulla_sed.txt","ipsum_dolor_sit.txt","nullam.txt","purus.txt","sit_amet_sapien.txt","tincidunt.txt","rutrum_ac.txt","nunc_nisl_duis.txt","non_velit_donec.txt","congue_eget.txt","ultrices.txt","feugiat_non.txt","cubilia_curae.txt","fusce_congue_diam.txt","nisl.txt","feugiat_et_eros.txt","ligula_suspendisse_ornare.txt","turpis_a.txt","justo_in.txt","orci_nullam.txt","proin.txt","nunc_viverra_dapibus.txt","nulla_quisque_arcu.txt","eu_est_congue.txt","morbi.txt","donec.txt","purus_eu.txt","bibendum.txt","sapien_urna_pretium.txt","consequat.txt","mauris_eget_massa.txt","suspendisse.txt","aliquet_at_feugiat.txt","orci_pede_venenatis.txt"],
	"fake_files" : [],
	"honeypots":[1,2,3,4,5,6,7,8,9,10,12,13,14,15,17,19,21,22,23,25,26,27,30,31,32,34,35,37,39,40],
	"real":[11,16,18,20,24,28,29,33,36,38],
	"all":[10,36,38,40,31,1,20,37,26,7,22,23,28,16,12,14,29,18,11,35,15,5,21,30,13,9,2,6,32,27,19,3,17,4,34,24,39,33,25,8]
}
sysData.push(round1);