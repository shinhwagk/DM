package models.migrate.onceinsert;

import java.sql.ResultSet;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by zhangxu on 2016/7/20.
 */
public class OnceInsertMain {
    static AtomicInteger ai = new AtomicInteger(5);
    static List<Integer> a = new ArrayList<>();
//    static Queue<Integer> queue = Stream.iterate(1, x -> x + 1)
//            .limit(100000)
//            .collect(Collectors.toCollection(LinkedList::new));


    static void start() {
        Stream.generate(() -> queue.poll()).limit(queue.size()).forEach(x -> {
            a.add(x);
            if (a.size() % 1000 == 0) {
                Stream.generate(() -> ai.getAndUpdate(x1 -> x1 > 0 ? x1 - 1 : 0))
                        .filter(Test1::numberGtZero)
                        .limit(1).forEach(ff -> Test1.insert(a));
            }
        });
    }

    public static <T extends Collection> void insert(List<Integer> t) {
        ArrayList<Integer> b = t.stream().collect(Collectors.toCollection(ArrayList::new));
        t.clear();
        ai.incrementAndGet();
        Runnable r = () -> System.out.println(b);
        new Thread(r).start();
    }

    public static boolean numberGtZero(int n) {
        return n > 0 ? true : false;
    }

    public static boolean numberGtZero(Long n) {
        return n > 0 ? true : false;
    }


}


class abc implements Iterator<String> {
    ResultSet rs;

    abc(ResultSet rs) {
        this.rs = rs;
    }

    @Override
    public boolean hasNext() {
        return rs.next();
    }

    @Override
    public String next() {
        return null;
    }
}
