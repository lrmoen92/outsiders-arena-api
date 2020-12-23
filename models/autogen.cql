CREATE KEYSPACE outsiders_arena WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}  AND durable_writes = true;

CREATE TYPE outsiders_arena.battleeffect (
    duration int,
    avatarurl text,
    instanceid int,
    groupid int,
    description text,
    origincharacter int,
    targetcharacter int,
    name text,
    interruptable boolean,
    conditional boolean,
    physical boolean,
    magical boolean,
    affliction boolean,
    visible boolean,
    stacks boolean,
    condition text,
    statmods map<text, int>,
    quality text
);

CREATE TYPE outsiders_arena.ability (
    cooldown int,
    abilityurl text,
    name text,
    description text,
    position int,
    targets text,
    types text,
    aoe boolean,
    self boolean,
    ally boolean,
    enemy boolean,
    cost list<text>,
    selfeffects list<frozen<battleeffect>>,
    enemyeffects list<frozen<battleeffect>>,
    aoeenemyeffects list<frozen<battleeffect>>,
    allyeffects list<frozen<battleeffect>>,
    aoeallyeffects list<frozen<battleeffect>>
);

CREATE TYPE outsiders_arena.characterinstance (
    hp int,
    position int,
    cooldowns list<int>,
    playeronecharacter boolean,
    location int,
    characterid int,
    dead boolean,
    effects list<frozen<battleeffect>>,
    flags list<text>
);

CREATE TYPE outsiders_arena.missionrequirement (
    amount int,
    missionid int,
    userfaction text,
    targetfaction text
);

CREATE TYPE outsiders_arena.missionprogress (
    missionid int,
    requirements list<frozen<missionrequirement>>
);

CREATE TYPE outsiders_arena.playercredentials (
    email text,
    password text
);

CREATE TABLE outsiders_arena.battle (
    id int PRIMARY KEY,
    arenaid int,
    playeridone int,
    playeridtwo int,
    playeroneenergy map<text, int>,
    playeronestart boolean,
    playeroneteam list<frozen<characterinstance>>,
    playertwoenergy map<text, int>,
    playertwoteam list<frozen<characterinstance>>,
    queue text,
    status text,
    turn int
) WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';
CREATE INDEX battle_playeridone ON outsiders_arena.battle (playeridone);

CREATE TABLE outsiders_arena.player (
    id int PRIMARY KEY,
    avatarurl text,
    characteridsunlocked set<int>,
    credentials frozen<playercredentials>,
    displayname text,
    level int,
    missionidscompleted set<int>,
    missionprogress list<frozen<missionprogress>>,
    xp int
) WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';

CREATE TABLE outsiders_arena.character (
    id int PRIMARY KEY,
    abilities list<frozen<ability>>,
    avatarurl text,
    description text,
    factions list<text>,
    name text
) WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';

CREATE TABLE outsiders_arena.mission (
    id int PRIMARY KEY,
    avatarurl text,
    characteridunlocked int,
    description text,
    minmumlevel int,
    name text,
    prerequisitemissionid int,
    requirements list<frozen<missionrequirement>>
) WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';