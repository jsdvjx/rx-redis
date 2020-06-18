import {
    RedisClient,
    Commands,
    OverloadedListCommand,
    OverloadedSetCommand,
    OverloadedCommand,
    OverloadedKeyCommand,
    OverloadedLastCommand,
    Callback,
} from 'redis';
import { Observable } from 'rxjs';
import * as redis from 'redis';
export interface RxOverloadedListCommand<T, U> {
    (...args: T[]): Observable<U>;
}
export type RxOverloadedCommand<T, U> = RxOverloadedListCommand<T, U>;
export type RxOverloadedSetCommand<T, U> = RxOverloadedListCommand<T, U>;
export type RxOverloadedKeyCommand<T, U> = RxOverloadedListCommand<T, U>;
export interface RxOverloadedLastCommand<T1, T2, U> {
    (arg1: T1, arg2: T1, arg3: T1, arg4: T1, arg5: T1, arg6: T2): Observable<U>;
    (arg1: T1, arg2: T1, arg3: T1, arg4: T1, arg5: T2): Observable<U>;
    (arg1: T1, arg2: T1, arg3: T1, arg4: T2): Observable<U>;
    (arg1: T1, arg2: T1, arg3: T2): Observable<U>;
    (arg1: T1, arg2: T2 | Array<T1 | T2>): Observable<U>;
    (args: Array<T1 | T2>): Observable<U>;
    (...args: Array<T1 | T2>): Observable<U>;
}
export type PoneCallbackFun<T, U> = (first: U, p: Callback<T>) => any;
export type PtwoCallbackFun<T1, T2, R> = (
    first: T1,
    second: T2,
    cb: Callback<R>,
) => any;
export type PzeroCallbackFun<T> = (p: Callback<T>) => any;
export type P3<T1, T2, T3, R> = (
    p1: T1,
    p2: T2,
    p3: T3,
    cb?: Callback<R>,
) => any;
export interface Transform {
    <T, U, R>(input: OverloadedListCommand<T, U, R>): RxOverloadedListCommand<
        T,
        U
    >;
    <T, U>(input: OverloadedSetCommand<T, U, boolean>): RxOverloadedSetCommand<
        T,
        U
    >;
    <T, U>(input: OverloadedCommand<T, U, boolean>): RxOverloadedCommand<T, U>;
    <T, U>(input: OverloadedKeyCommand<T, U, boolean>): RxOverloadedKeyCommand<
        T,
        U
    >;
    <T1, T2, U>(
        input: OverloadedLastCommand<T1, T2, U, boolean>,
    ): RxOverloadedLastCommand<T1, T2, U>;
    <R>(input: F0<R>): () => Observable<R>;
    <T1, R>(input: F1<T1, R>): (p1: T1) => Observable<R>;
    <T1, T2, R>(input: F2<T1, T2, R>): (p1: T1, p2: T2) => Observable<R>;
    <T1, T2, T3, R>(input: F3<T1, T2, T3, R>): (
        p1: T1,
        p2: T2,
        p3: T3,
    ) => Observable<R>;
    <T1, T2, T3, T4, R>(input: F4<T1, T2, T3, T4, R>): (
        p1: T1,
        p2: T2,
        p3: T3,
        p4: T4,
    ) => Observable<R>;
    <T1, T2, T3, T4, T5, R>(input: F5<T1, T2, T3, T4, T5, R>): (
        p1: T1,
        p2: T2,
        p3: T3,
        p4: T4,
        p5: T5,
    ) => Observable<R>;
}
export type F0<R> = (cb?: Callback<R>) => any;
export type F1<T1, R> = (p1: T1, cb?: Callback<R>) => any;
export type F2<T1, T2, R> = (p1: T1, p2: T2, cb?: Callback<R>) => any;
export type F3<T1, T2, T3, R> = (
    p1: T1,
    p2: T2,
    p3: T3,
    cb?: Callback<R>,
) => any;
export type F4<T1, T2, T3, T4, R> = (
    p1: T1,
    p2: T2,
    p3: T3,
    p4: T4,
    cb?: Callback<R>,
) => any;
export type F5<T1, T2, T3, T4, T5, R> = (
    p1: T1,
    p2: T2,
    p3: T3,
    p4: T4,
    p5: T5,
    cb?: Callback<R>,
) => any;
export type ServerInfo = {
    server: {
        redis_version: string;
        redis_git_sha1: string;
        redis_git_dirty: string;
        redis_build_id: string;
        redis_mode: string;
        os: string;
        arch_bits: number;
        multiplexing_api: string;
        atomicvar_api: string;
        gcc_version: string;
        process_id: number;
        run_id: string;
        tcp_port: number;
        uptime_in_seconds: number;
        uptime_in_days: number;
        hz: number;
        configured_hz: number;
        lru_clock: number;
        executable: string;
        config_file: string;
    };
    clients: {
        connected_clients: number;
        client_recent_max_input_buffer: number;
        client_recent_max_output_buffer: number;
        blocked_clients: number;
    };
    memory: {
        used_memory: number;
        used_memory_human: string;
        used_memory_rss: number;
        used_memory_rss_human: string;
        used_memory_peak: number;
        used_memory_peak_human: string;
        used_memory_peak_perc: string;
        used_memory_overhead: number;
        used_memory_startup: number;
        used_memory_dataset: number;
        used_memory_dataset_perc: string;
        allocator_allocated: number;
        allocator_active: number;
        allocator_resident: number;
        total_system_memory: number;
        total_system_memory_human: string;
        used_memory_lua: number;
        used_memory_lua_human: string;
        used_memory_scripts: number;
        used_memory_scripts_human: string;
        number_of_cached_scripts: number;
        maxmemory: number;
        maxmemory_human: string;
        maxmemory_policy: string;
        allocator_frag_ratio: number;
        allocator_frag_bytes: number;
        allocator_rss_ratio: number;
        allocator_rss_bytes: number;
        rss_overhead_ratio: number;
        rss_overhead_bytes: number;
        mem_fragmentation_ratio: number;
        mem_fragmentation_bytes: number;
        mem_not_counted_for_evict: number;
        mem_replication_backlog: number;
        mem_clients_slaves: number;
        mem_clients_normal: number;
        mem_aof_buffer: number;
        mem_allocator: string;
        active_defrag_running: number;
        lazyfree_pending_objects: number;
    };
    persistence: {
        loading: number;
        rdb_changes_since_last_save: number;
        rdb_bgsave_in_progress: number;
        rdb_last_save_time: number;
        rdb_last_bgsave_status: string;
        rdb_last_bgsave_time_sec: number;
        rdb_current_bgsave_time_sec: number;
        rdb_last_cow_size: number;
        aof_enabled: number;
        aof_rewrite_in_progress: number;
        aof_rewrite_scheduled: number;
        aof_last_rewrite_time_sec: number;
        aof_current_rewrite_time_sec: number;
        aof_last_bgrewrite_status: string;
        aof_last_write_status: string;
        aof_last_cow_size: number;
    };
    stats: {
        total_connections_received: number;
        total_commands_processed: number;
        instantaneous_ops_per_sec: number;
        total_net_input_bytes: number;
        total_net_output_bytes: number;
        instantaneous_input_kbps: number;
        instantaneous_output_kbps: number;
        rejected_connections: number;
        sync_full: number;
        sync_partial_ok: number;
        sync_partial_err: number;
        expired_keys: number;
        expired_stale_perc: number;
        expired_time_cap_reached_count: number;
        evicted_keys: number;
        keyspace_hits: number;
        keyspace_misses: number;
        pubsub_channels: number;
        pubsub_patterns: number;
        latest_fork_usec: number;
        migrate_cached_sockets: number;
        slave_expires_tracked_keys: number;
        active_defrag_hits: number;
        active_defrag_misses: number;
        active_defrag_key_hits: number;
        active_defrag_key_misses: number;
        replication: {
            role: string;
            connected_slaves: number;
            master_replid: string;
            master_replid2: string;
            master_repl_offset: number;
            second_repl_offset: number;
            repl_backlog_active: number;
            repl_backlog_size: number;
            repl_backlog_first_byte_offset: number;
            repl_backlog_histlen: number;
        };
        cpu: {
            used_cpu_sys: number;
            used_cpu_user: number;
            used_cpu_sys_children: number;
            used_cpu_user_children: number;
        };
        cluster: {
            cluster_enabled: number;
        };
        keyspace: Record<string, string>;
        commandstats: {
            cmdstat_info: string;
            cmdstat_auth: string;
        };
    };
};
export class RxRedisBate {
    private _client = redis.createClient(this.options);
    constructor(private options: redis.ClientOpts) {
        this.transform(this._client.subscribe);
    }
    //@ts-ignore
    private transform: Transform = (
        handler: Commands<boolean>[keyof Commands<boolean>],
    ) => {
        return (...args: any) =>
            new Observable(obser => {
                //@ts-ignore
                handler.bind(this._client)(...args, (error, result) => {
                    if (error) {
                        obser.error(error);
                    } else {
                        obser.next(result);
                    }
                    obser.complete();
                });
            });
    };
    /**
     * Listen for all requests received by the server in real time.
     */
    monitor = () => {
        return new Observable<string>(obser => {
            this._client.monitor((error, info) => {
                if (error) {
                    obser.error(error);
                } else {
                    obser.next(info);
                }
            });
        });
    };
    MONITOR = this.monitor;
    /**
     * Get information and statistics about the server.
     */
    info = <T extends keyof ServerInfo | 'default' = 'default'>(
        section?: T,
    ) => {
        if (!section) {
            //@ts-ignore
            section = 'default';
        }
        //@ts-ignore
        return this.transform(this._client.info)(section) as Observable<
            T extends keyof ServerInfo
                ? ServerInfo[T]
                : T extends 'default'
                ? ServerInfo
                : never
        >;
    };

    INFO = this.info;
    /**
     * Ping the server.
     */
    //    ping(callback?: Callback<string>): R;
    //  ping(message: string, callback?: Callback<string>): R;
    //   PING(callback?: Callback<string>): R;
    // PING(message: string, callback?: Callback<string>): R;
    //@ts-ignore
    ping: (params?: string) => Observable<string> = this.transform(
        this._client.ping,
    );

    /**
     * Post a message to a channel.
     */
    publish = this.transform(this._client.publish);
    PUBLISH = this.publish;

    /**
     * Authenticate to the server.
     */
    auth = this.transform(this._client.auth);
    AUTH = this.auth;
    /**
     * Set multiple hash fields to multiple values.
     */
    //hmset: OverloadedSetCommand<string | number, 'OK', R>;
    hmset = this.transform(this._client.hmset);
    HMSET = this.hmset;

    /**
     * Listen for messages published to the given channels.
     */
    subscribe = this.transform(this._client.subscribe);
    SUBSCRIBE = this.subscribe;

    /**
     * Stop listening for messages posted to the given channels.
     */
    unsubscribe = this.transform(this._client.unsubscribe);
    UNSUBSCRIBE = this.unsubscribe;

    /**
     * Listen for messages published to channels matching the given patterns.
     */
    psubscribe = this.transform(this._client.psubscribe);
    PSUBSCRIBE = this.psubscribe;

    /**
     * Stop listening for messages posted to channels matching the given patterns.
     */
    punsubscribe = this.transform(this._client.punsubscribe);
    PUNSUBSCRIBE = this.punsubscribe;

    /**
     * Append a value to a key.
     */
    append = this.transform(this._client.append);
    APPEND = this.append;

    /**
     * Asynchronously rewrite the append-only file.
     */
    bgrewriteaof = this.transform(this._client.bgrewriteaof);
    BGREWRITEAOF = this.bgrewriteaof;

    /**
     * Asynchronously save the dataset to disk.
     */
    bgsave = this.transform(this._client.bgsave);
    BGSAVE = this.bgsave;
    /**
     * Count set bits in a string.
     */
    bitcount: (
        key: string,
        start?: number,
        end?: number,
    ) => Observable<number> = this.transform(this._client.bitcount);

    BITCOUNT = this.bitcount;

    /**
     * Perform arbitrary bitfield integer operations on strings.
     */
    bitfield = this.transform(this._client.bitfield);
    BITFIELD = this.bitfield;

    /**
     * Perform bitwise operations between strings.
     */
    bitop = this.transform(this._client.bitop as OverloadedListCommand<
        string,
        number,
        boolean
    >);

    BITOP = this.bitop;

    /**
     * Find first bit set or clear in a string.
     */
    bitpos: (
        key: string,
        bit: number,
        start?: number,
        end?: number,
    ) => Observable<number> = this.transform(this._client.bitpos);

    BITPOS = this.bitpos;

    /**
     * Remove and get the first element in a list, or block until one is available.
     */
    blpop = this.transform(this._client.blpop);
    BLPOP = this.blpop;

    /**
     * Remove and get the last element in a list, or block until one is available.
     */
    brpop = this.transform(this._client.brpop);
    BRPOP = this.brpop;

    /**
     * Pop a value from a list, push it to another list and return it; or block until one is available.
     */
    brpoplpush = this.transform(this._client.brpoplpush);
    BRPOPLPUSH = this.brpoplpush;

    /**
     * ADDSLOTS - Assign new hash slots to receiving node.
     * COUNT-FAILURE-REPORTS - Return the number of failure reports active for a given node.
     * COUNTKEYSINSLOT - Return the number of local keys in the specified hash slot.
     * DELSLOTS - Set hash slots as unbound in receiving node.
     * FAILOVER - Forces a slave to perform a manual failover of its master.
     * FORGET - Remove a node from the nodes table.
     * GETKEYSINSLOT - Return local key names in the specified hash slot.
     * INFO - Provides info about Redis Cluster node state.
     * KEYSLOT - Returns the hash slot of the specified key.
     * MEET - Force a node cluster to handshake with another node.
     * NODES - Get cluster config for the node.
     * REPLICATE - Reconfigure a node as a slave of the specified master node.
     * RESET - Reset a Redis Cluster node.
     * SAVECONFIG - Forces the node to save cluster state on disk.
     * SET-CONFIG-EPOCH - Set the configuration epoch in a new node.
     * SETSLOT - Bind a hash slot to a specified node.
     * SLAVES - List slave nodes of the specified master node.
     * SLOTS - Get array of Cluster slot to node mappings.
     */
    cluster = this.transform(this._client.cluster);
    CLUSTER = this.cluster;

    /**
     * Get array of Redis command details.
     *
     * COUNT - Get total number of Redis commands.
     * GETKEYS - Extract keys given a full Redis command.
     * INFO - Get array of specific REdis command details.
     */
    command = this.transform(this._client.command);
    COMMAND = this.command;

    /**
     * Get array of Redis command details.
     *
     * COUNT - Get array of Redis command details.
     * GETKEYS - Extract keys given a full Redis command.
     * INFO - Get array of specific Redis command details.
     * GET - Get the value of a configuration parameter.
     * REWRITE - Rewrite the configuration file with the in memory configuration.
     * SET - Set a configuration parameter to the given value.
     * RESETSTAT - Reset the stats returned by INFO.
     */
    config = this.transform(this._client.config);
    CONFIG = this.transform(this._client.CONFIG);

    /**
     * Return the number of keys in the selected database.
     */
    dbsize = this.transform(this._client.dbsize);
    DBSIZE = this.transform(this._client.DBSIZE);

    /**
     * OBJECT - Get debugging information about a key.
     * SEGFAULT - Make the server crash.
     */
    debug = this.transform(this._client.debug);
    DEBUG = this.transform(this._client.DEBUG);

    /**
     * Decrement the integer value of a key by one.
     */
    decr = this.transform(this._client.decr);
    DECR = this.transform(this._client.DECR);

    /**
     * Decrement the integer value of a key by the given number.
     */
    decrby = this.transform(this._client.decrby);
    DECRBY = this.transform(this._client.DECRBY);

    /**
     * Delete a key.
     */
    del = this.transform(this._client.del);
    DEL = this.transform(this._client.DEL);

    /**
     * Discard all commands issued after MULTI.
     */
    discard = this.transform(this._client.discard);
    DISCARD = this.transform(this._client.DISCARD);

    /**
     * Return a serialized version of the value stored at the specified key.
     */
    dump = this.transform(this._client.dump);
    DUMP = this.transform(this._client.DUMP);

    /**
     * Echo the given string.
     */
    echo = this.transform(this._client.echo);
    ECHO = this.transform(this._client.ECHO);

    /**
     * Execute a Lua script server side.
     */
    eval = this.transform(this._client.eval);
    EVAL = this.transform(this._client.EVAL);

    /**
     * Execute a Lue script server side.
     */
    evalsha = this.transform(this._client.evalsha);
    EVALSHA = this.transform(this._client.EVALSHA);

    /**
     * Determine if a key exists.
     */
    exists = this.transform(this._client.exists);
    EXISTS = this.transform(this._client.EXISTS);

    /**
     * Set a key's time to live in seconds.
     */
    expire = this.transform(this._client.expire);
    EXPIRE = this.transform(this._client.EXPIRE);

    /**
     * Set the expiration for a key as a UNIX timestamp.
     */
    expireat = this.transform(this._client.expireat);
    EXPIREAT = this.transform(this._client.EXPIREAT);

    /**
     * Remove all keys from all databases.
     */
    flushall: (async?: 'ASYNC') => Observable<string> = this.transform(
        this._client.flushall,
    );
    FLUSHALL = this.flushall;

    /**
     * Remove all keys from the current database.
     */
    flushdb: (async?: 'ASYNC') => Observable<string> = this.transform(
        this._client.flushdb,
    );
    FLUSHDB = this.flushdb;

    /**
     * Add one or more geospatial items in the geospatial index represented using a sorted set.
     */
    geoadd = this.transform(this._client.geoadd);
    GEOADD = this.transform(this._client.GEOADD);

    /**
     * Returns members of a geospatial index as standard geohash strings.
     */
    geohash = this.transform(this._client.geohash);
    GEOHASH = this.transform(this._client.GEOHASH);

    /**
     * Returns longitude and latitude of members of a geospatial index.
     */
    geopos = this.transform(this._client.geopos);
    GEOPOS = this.transform(this._client.GEOPOS);

    /**
     * Returns the distance between two members of a geospatial index.
     */
    geodist = this.transform(this._client.geodist);
    GEODIST = this.transform(this._client.GEODIST);

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point.
     */
    georadius = this.transform(this._client.georadius);
    GEORADIUS = this.transform(this._client.GEORADIUS);

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member.
     */
    georadiusbymember = this.transform(this._client.georadiusbymember);
    GEORADIUSBYMEMBER = this.transform(this._client.GEORADIUSBYMEMBER);

    /**
     * Get the value of a key.
     */
    get = this.transform(this._client.get);
    GET = this.transform(this._client.GET);

    /**
     * Returns the bit value at offset in the string value stored at key.
     */
    getbit = this.transform(this._client.getbit);
    GETBIT = this.transform(this._client.GETBIT);

    /**
     * Get a substring of the string stored at a key.
     */
    getrange = this.transform(this._client.getrange);
    GETRANGE = this.transform(this._client.GETRANGE);

    /**
     * Set the string value of a key and return its old value.
     */
    getset = this.transform(this._client.getset);
    GETSET = this.transform(this._client.GETSET);

    /**
     * Delete on or more hash fields.
     */
    hdel = this.transform(this._client.hdel);
    HDEL = this.transform(this._client.HDEL);

    /**
     * Determine if a hash field exists.
     */
    hexists = this.transform(this._client.hexists);
    HEXISTS = this.transform(this._client.HEXISTS);

    /**
     * Get the value of a hash field.
     */
    hget = this.transform(this._client.hget);
    HGET = this.transform(this._client.HGET);

    /**
     * Get all fields and values in a hash.
     */
    hgetall = this.transform(this._client.hgetall);
    HGETALL = this.transform(this._client.HGETALL);

    /**
     * Increment the integer value of a hash field by the given number.
     */
    hincrby = this.transform(this._client.hincrby);
    HINCRBY = this.transform(this._client.HINCRBY);

    /**
     * Increment the float value of a hash field by the given amount.
     */
    hincrbyfloat = this.transform(this._client.hincrbyfloat);
    HINCRBYFLOAT = this.transform(this._client.HINCRBYFLOAT);
    /**
     * Get all the fields of a hash.
     */
    hkeys = this.transform(this._client.hkeys);
    HKEYS = this.transform(this._client.HKEYS);

    /**
     * Get the number of fields in a hash.
     */
    hlen = this.transform(this._client.hlen);
    HLEN = this.transform(this._client.HLEN);

    /**
     * Get the values of all the given hash fields.
     */
    hmget = this.transform(this._client.hmget);
    HMGET = this.transform(this._client.HMGET);

    /**
     * Set the string value of a hash field.
     */
    hset = this.transform(this._client.hset);
    HSET = this.transform(this._client.HSET);

    /**
     * Set the value of a hash field, only if the field does not exist.
     */
    hsetnx = this.transform(this._client.hsetnx);
    HSETNX = this.transform(this._client.HSETNX);

    /**
     * Get the length of the value of a hash field.
     */
    hstrlen = this.transform(this._client.hstrlen);
    HSTRLEN = this.transform(this._client.HSTRLEN);

    /**
     * Get all the values of a hash.
     */
    hvals = this.transform(this._client.hvals);
    HVALS = this.transform(this._client.HVALS);

    /**
     * Increment the integer value of a key by one.
     */
    incr = this.transform(this._client.incr);
    INCR = this.transform(this._client.INCR);

    /**
     * Increment the integer value of a key by the given amount.
     */
    incrby = this.transform(this._client.incrby);
    INCRBY = this.transform(this._client.INCRBY);

    /**
     * Increment the float value of a key by the given amount.
     */
    incrbyfloat = this.transform(this._client.incrbyfloat);
    INCRBYFLOAT = this.transform(this._client.INCRBYFLOAT);

    /**
     * Find all keys matching the given pattern.
     */
    keys = this.transform(this._client.keys);
    KEYS = this.transform(this._client.KEYS);

    /**
     * Get the UNIX time stamp of the last successful save to disk.
     */
    lastsave = this.transform(this._client.lastsave);
    LASTSAVE = this.transform(this._client.LASTSAVE);

    /**
     * Get an element from a list by its index.
     */
    lindex = this.transform(this._client.lindex);
    LINDEX = this.transform(this._client.LINDEX);

    /**
     * Insert an element before or after another element in a list.
     */
    linsert = this.transform(this._client.linsert);
    LINSERT = this.transform(this._client.LINSERT);

    /**
     * Get the length of a list.
     */
    llen = this.transform(this._client.llen);
    LLEN = this.transform(this._client.LLEN);

    /**
     * Remove and get the first element in a list.
     */
    lpop = this.transform(this._client.lpop);
    LPOP = this.transform(this._client.LPOP);

    /**
     * Prepend one or multiple values to a list.
     */
    lpush = this.transform(this._client.lpush);
    LPUSH = this.transform(this._client.LPUSH);

    /**
     * Prepend a value to a list, only if the list exists.
     */
    lpushx = this.transform(this._client.lpushx);
    LPUSHX = this.transform(this._client.LPUSHX);

    /**
     * Get a range of elements from a list.
     */
    lrange = this.transform(this._client.lrange);
    LRANGE = this.transform(this._client.LRANGE);

    /**
     * Remove elements from a list.
     */
    lrem = this.transform(this._client.lrem);
    LREM = this.transform(this._client.LREM);

    /**
     * Set the value of an element in a list by its index.
     */
    lset = this.transform(this._client.lset);
    LSET = this.transform(this._client.LSET);

    /**
     * Trim a list to the specified range.
     */
    ltrim = this.transform(this._client.ltrim);
    LTRIM = this.transform(this._client.LTRIM);

    /**
     * Get the values of all given keys.
     */
    mget = this.transform(this._client.mget);
    MGET = this.transform(this._client.MGET);

    /**
     * Atomically tranfer a key from a Redis instance to another one.
     */
    migrate = this.transform(this._client.migrate);
    MIGRATE = this.transform(this._client.MIGRATE);

    /**
     * Move a key to another database.
     */
    move = this.transform(this._client.move);
    MOVE = this.transform(this._client.MOVE);

    /**
     * Set multiple keys to multiple values.
     */
    mset = this.transform(this._client.mset);
    MSET = this.transform(this._client.MSET);

    /**
     * Set multiple keys to multiple values, only if none of the keys exist.
     */
    msetnx = this.transform(this._client.msetnx);
    MSETNX = this.transform(this._client.MSETNX);

    /**
     * Inspect the internals of Redis objects.
     */
    object = this.transform(this._client.object);
    OBJECT = this.transform(this._client.OBJECT);

    /**
     * Remove the expiration from a key.
     */
    persist = this.transform(this._client.persist);
    PERSIST = this.transform(this._client.PERSIST);

    /**
     * Remove a key's time to live in milliseconds.
     */
    pexpire = this.transform(this._client.pexpire);
    PEXPIRE = this.transform(this._client.PEXPIRE);

    /**
     * Set the expiration for a key as a UNIX timestamp specified in milliseconds.
     */
    pexpireat = this.transform(this._client.pexpireat);
    PEXPIREAT = this.transform(this._client.PEXPIREAT);

    /**
     * Adds the specified elements to the specified HyperLogLog.
     */
    pfadd = this.transform(this._client.pfadd);
    PFADD = this.transform(this._client.PFADD);

    /**
     * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
     */
    pfcount = this.transform(this._client.pfcount);
    PFCOUNT = this.transform(this._client.PFCOUNT);

    /**
     * Merge N different HyperLogLogs into a single one.
     */
    pfmerge = this.transform(this._client.pfmerge);
    PFMERGE = this.transform(this._client.PFMERGE);

    /**
     * Set the value and expiration in milliseconds of a key.
     */
    psetex = this.transform(this._client.psetex);
    PSETEX = this.transform(this._client.PSETEX);

    /**
     * Inspect the state of the Pub/Sub subsytem.
     */
    pubsub = this.transform(this._client.pubsub);
    PUBSUB = this.transform(this._client.PUBSUB);

    /**
     * Get the time to live for a key in milliseconds.
     */
    pttl = this.transform(this._client.pttl);
    PTTL = this.transform(this._client.PTTL);

    /**
     * Close the connection.
     */
    quit = this.transform(this._client.quit);
    QUIT = this.transform(this._client.QUIT);

    /**
     * Return a random key from the keyspace.
     */
    randomkey = this.transform(this._client.randomkey);
    RANDOMKEY = this.transform(this._client.RANDOMKEY);

    /**
     * Enables read queries for a connection to a cluster slave node.
     */
    readonly = this.transform(this._client.readonly);
    READONLY = this.transform(this._client.READONLY);

    /**
     * Disables read queries for a connection to cluster slave node.
     */
    readwrite = this.transform(this._client.readwrite);
    READWRITE = this.transform(this._client.READWRITE);

    /**
     * Rename a key.
     */
    rename = this.transform(this._client.rename);
    RENAME = this.transform(this._client.RENAME);

    /**
     * Rename a key, only if the new key does not exist.
     */
    renamenx = this.transform(this._client.renamenx);
    RENAMENX = this.transform(this._client.RENAMENX);

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     */
    restore = this.transform(this._client.restore);
    RESTORE = this.transform(this._client.RESTORE);

    /**
     * Return the role of the instance in the context of replication.
     */
    role = this.transform(this._client.role);
    ROLE = this.transform(this._client.ROLE);

    /**
     * Remove and get the last element in a list.
     */
    rpop = this.transform(this._client.rpop);
    RPOP = this.transform(this._client.RPOP);

    /**
     * Remove the last element in a list, prepend it to another list and return it.
     */
    rpoplpush = this.transform(this._client.rpoplpush);
    RPOPLPUSH = this.transform(this._client.RPOPLPUSH);

    /**
     * Append one or multiple values to a list.
     */
    rpush = this.transform(this._client.rpush);
    RPUSH = this.transform(this._client.RPUSH);

    /**
     * Append a value to a list, only if the list exists.
     */
    rpushx = this.transform(this._client.rpushx);
    RPUSHX = this.transform(this._client.RPUSHX);

    /**
     * Append one or multiple members to a set.
     */
    sadd = this.transform(this._client.sadd);
    SADD = this.transform(this._client.SADD);

    /**
     * Synchronously save the dataset to disk.
     */
    save = this.transform(this._client.save);
    SAVE = this.transform(this._client.SAVE);

    /**
     * Get the number of members in a set.
     */
    scard = this.transform(this._client.scard);
    SCARD = this.transform(this._client.SCARD);

    /**
     * DEBUG - Set the debug mode for executed scripts.
     * EXISTS - Check existence of scripts in the script cache.
     * FLUSH - Remove all scripts from the script cache.
     * KILL - Kill the script currently in execution.
     * LOAD - Load the specified Lua script into the script cache.
     */
    script = this.transform(this._client.script);
    SCRIPT = this.transform(this._client.SCRIPT);

    /**
     * Subtract multiple sets.
     */
    sdiff = this.transform(this._client.sdiff);
    SDIFF = this.transform(this._client.SDIFF);

    /**
     * Subtract multiple sets and store the resulting set in a key.
     */
    sdiffstore = this.transform(this._client.sdiffstore);
    SDIFFSTORE = this.transform(this._client.SDIFFSTORE);

    /**
     * Change the selected database for the current connection.
     */
    select = this.transform(this._client.select);
    SELECT = this.transform(this._client.SELECT);

    /**
     * Set the string value of a key.
     */
    set: (
        key: string,
        value: string,
        flagOrmode?: string,
        duration?: number,
        flag?: string,
    ) => Observable<'OK' | undefined> = this.transform(this._client.set);

    SET = this.set;

    /**
     * Sets or clears the bit at offset in the string value stored at key.
     */
    setbit = this.transform(this._client.setbit);
    SETBIT = this.transform(this._client.SETBIT);

    /**
     * Set the value and expiration of a key.
     */
    setex = this.transform(this._client.setex);
    SETEX = this.transform(this._client.SETEX);
    /**
     * Set the value of a key, only if the key does not exist.
     */
    setnx = this.transform(this._client.setnx);
    SETNX = this.transform(this._client.SETNX);

    /**
     * Overwrite part of a string at key starting at the specified offset.
     */
    setrange = this.transform(this._client.setrange);
    SETRANGE = this.transform(this._client.SETRANGE);
    /**
     * Synchronously save the dataset to disk and then shut down the server.
     */
    shutdown = this.transform(this._client.shutdown);
    SHUTDOWN = this.transform(this._client.SHUTDOWN);

    /**
     * Intersect multiple sets.
     */
    sinter = this.transform(this._client.sinter);
    SINTER = this.transform(this._client.SINTER);

    /**
     * Intersect multiple sets and store the resulting set in a key.
     */
    sinterstore = this.transform(this._client.sinterstore);
    SINTERSTORE = this.transform(this._client.SINTERSTORE);

    /**
     * Determine if a given value is a member of a set.
     */
    sismember = this.transform(this._client.sismember);
    SISMEMBER = this.transform(this._client.SISMEMBER);

    /**
     * Make the server a slave of another instance, or promote it as master.
     */
    slaveof = this.transform(this._client.slaveof);
    SLAVEOF = this.transform(this._client.SLAVEOF);

    /**
     * Manages the Redis slow queries log.
     */
    slowlog = this.transform(this._client.slowlog);
    SLOWLOG = this.transform(this._client.SLOWLOG);

    /**
     * Get all the members in a set.
     */
    smembers = this.transform(this._client.smembers);
    SMEMBERS = this.transform(this._client.SMEMBERS);

    /**
     * Move a member from one set to another.
     */
    smove = this.transform(this._client.smove);
    SMOVE = this.transform(this._client.SMOVE);

    /**
     * Sort the elements in a list, set or sorted set.
     */
    sort = this.transform(this._client.sort);
    SORT = this.transform(this._client.SORT);

    /**
     * Remove and return one or multiple random members from a set.
     */
    spop: (
        key: string,
        count?: number,
    ) => Observable<
        typeof count extends number ? string[] : string
    > = this.transform(this._client.spop as any);
    SPOP = this.spop;
    /**
     * Get one or multiple random members from a set.
     */
    srandmember: (
        key: string,
        count?: number,
    ) => Observable<
        typeof count extends number ? string[] : string
    > = this.transform(this._client.srandmember);
    SRANDMEMBER = this.srandmember;

    /**
     * Remove one or more members from a set.
     */
    srem = this.transform(this._client.srem);
    SREM = this.transform(this._client.SREM);

    /**
     * Get the length of the value stored in a key.
     */
    strlen = this.transform(this._client.strlen);
    STRLEN = this.transform(this._client.STRLEN);

    /**
     * Add multiple sets.
     */
    sunion = this.transform(this._client.sunion);
    SUNION = this.transform(this._client.SUNION);

    /**
     * Add multiple sets and store the resulting set in a key.
     */
    sunionstore = this.transform(this._client.sunionstore);
    SUNIONSTORE = this.transform(this._client.SUNIONSTORE);

    /**
     * Internal command used for replication.
     */
    sync = this.transform(this._client.sync);
    SYNC = this.transform(this._client.SYNC);

    /**
     * Return the current server time.
     */
    time = this.transform(this._client.time);
    TIME = this.transform(this._client.TIME);

    /**
     * Get the time to live for a key.
     */
    ttl = this.transform(this._client.ttl);
    TTL = this.transform(this._client.TTL);

    /**
     * Determine the type stored at key.
     */
    type = this.transform(this._client.type);
    TYPE = this.transform(this._client.TYPE);

    /**
     * Forget about all watched keys.
     */
    unwatch = this.transform(this._client.unwatch);
    UNWATCH = this.transform(this._client.UNWATCH);

    /**
     * Wait for the synchronous replication of all the write commands sent in the context of the current connection.
     */
    wait = this.transform(this._client.wait);
    WAIT = this.transform(this._client.WAIT);

    /**
     * Watch the given keys to determine execution of the MULTI/EXEC block.
     */
    watch = this.transform(this._client.watch);
    WATCH = this.transform(this._client.WATCH);

    /**
     * Add one or more members to a sorted set, or update its score if it already exists.
     */
    zadd = this.transform(this._client.zadd);
    ZADD = this.transform(this._client.ZADD);

    /**
     * Get the number of members in a sorted set.
     */
    zcard = this.transform(this._client.zcard);
    ZCARD = this.transform(this._client.ZCARD);

    /**
     * Count the members in a sorted set with scores between the given values.
     */
    zcount = this.transform(this._client.zcount);
    ZCOUNT = this.transform(this._client.ZCOUNT);

    /**
     * Increment the score of a member in a sorted set.
     */
    zincrby = this.transform(this._client.zincrby);
    ZINCRBY = this.transform(this._client.ZINCRBY);
    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key.
     */
    zinterstore = this.transform(this._client.zinterstore);
    ZINTERSTORE = this.transform(this._client.ZINTERSTORE);

    /**
     * Count the number of members in a sorted set between a given lexicographic range.
     */
    zlexcount = this.transform(this._client.zlexcount);
    ZLEXCOUNT = this.transform(this._client.ZLEXCOUNT);

    /**
     * Return a range of members in a sorted set, by index.
     */
    zrange: (
        key: string,
        start: number,
        stop: number,
        withscores?: string,
    ) => Observable<string[]> = this.transform(this._client.zrange);

    ZRANGE = this.zrange;
    /**
     * Return a range of members in a sorted set, by lexicographical range.
     */
    zrangebylex: (
        key: string,
        min: string,
        max: string,
        limit?: string,
        offset?: number,
        count?: number,
    ) => Observable<string[]> = this.transform(this._client.zrangebylex);

    ZRANGEBYLEX = this.zrangebylex;

    /**
     * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
     */
    zrevrangebylex: (
        key: string,
        min: string,
        max: string,
        limit?: string,
        offset?: number,
        count?: number,
    ) => Observable<string[]> = this.transform(this._client.zrevrangebylex);

    ZREVRANGEBYLEX = this.zrevrangebylex;

    /**
     * Return a range of members in a sorted set, by score.
     */
    zrangebyscore: (
        key: string,
        min: number | string,
        max: number | string,
        withscores?: string,
        limit?: string,
        offset?: number,
        count?: number,
    ) => Observable<string[]> = this.transform(this._client.zrangebyscore);
    ZRANGEBYSCORE = this.zrangebyscore;

    /**
     * Determine the index of a member in a sorted set.
     */
    zrank = this.transform(this._client.zrank);
    ZRANK = this.transform(this._client.ZRANK);

    /**
     * Remove one or more members from a sorted set.
     */
    zrem = this.transform(this._client.zrem);
    ZREM = this.transform(this._client.ZREM);

    /**
     * Remove all members in a sorted set between the given lexicographical range.
     */
    zremrangebylex = this.transform(this._client.zremrangebylex);
    ZREMRANGEBYLEX = this.transform(this._client.ZREMRANGEBYLEX);

    /**
     * Remove all members in a sorted set within the given indexes.
     */
    zremrangebyrank = this.transform(this._client.zremrangebyrank);
    ZREMRANGEBYRANK = this.transform(this._client.ZREMRANGEBYRANK);

    /**
     * Remove all members in a sorted set within the given indexes.
     */
    zremrangebyscore = this.transform(this._client.zremrangebyscore);
    ZREMRANGEBYSCORE = this.transform(this._client.ZREMRANGEBYSCORE);

    /**
     * Return a range of members in a sorted set, by index, with scores ordered from high to low.
     */
    zrevrange: (
        key: string,
        start: number,
        stop: number,
        withscores?: string,
    ) => Observable<string[]> = this.transform(this._client.zrevrange);

    ZREVRANGE = this.zrevrange;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low.
     */
    zrevrangebyscore: (
        key: string,
        min: number | string,
        max: number | string,
        withscores?: string,
        limit?: string,
        offset?: number,
        count?: number,
    ) => Observable<string[]> = this.transform(this._client.zrevrangebyscore);

    ZREVRANGEBYSCORE = this.zrevrangebyscore;
    /**
     * Determine the index of a member in a sorted set, with scores ordered from high to low.
     */
    zrevrank = this.transform(this._client.zrevrank);
    ZREVRANK = this.transform(this._client.ZREVRANK);

    /**
     * Get the score associated with the given member in a sorted set.
     */
    zscore = this.transform(this._client.zscore);
    ZSCORE = this.transform(this._client.ZSCORE);

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key.
     */
    zunionstore = this.transform(this._client.zunionstore);
    ZUNIONSTORE = this.transform(this._client.ZUNIONSTORE);

    /**
     * Incrementally iterate the keys space.
     */
    scan = this.transform(this._client.scan);
    SCAN = this.transform(this._client.SCAN);

    /**
     * Incrementally iterate Set elements.
     */
    sscan = this.transform(this._client.sscan);
    SSCAN = this.transform(this._client.SSCAN);

    /**
     * Incrementally iterate hash fields and associated values.
     */
    hscan = this.transform(this._client.hscan);
    HSCAN = this.transform(this._client.HSCAN);

    /**
     * Incrementally iterate sorted sets elements and associated scores.
     */
    zscan = this.transform(this._client.zscan);
    ZSCAN = this.transform(this._client.ZSCAN);
}
