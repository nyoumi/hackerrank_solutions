/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hackerrank;

/**
 *
 * @author Paul Aimé
 */
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class EqualizeArray {

    // Complete the equalizeArray function below.
    static int equalizeArray(int[] arr) {
        Map<Integer,Integer> temp=new HashMap<>();
        
       
        for (int i = 0; i < arr.length; i++) {
            Integer value=temp.getOrDefault(arr[i],0);
            
                temp.put(arr[i], ++value);
        }
        int max=0;

         System.out.println(temp.size());
        for (Map.Entry<Integer, Integer> entry : temp.entrySet()) {
            Integer key = entry.getKey();
            Integer value = entry.getValue();
            System.out.println("----------");
            System.out.println(key);
            System.out.println(value);
            if(max<value) max=value;
            
            
        }

        System.out.println(max);
        
        System.out.println(arr.length-max);
        return arr.length-max;


    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        //BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] arr = new int[n];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        int result = equalizeArray(arr);

        //bufferedWriter.write(String.valueOf(result));
        //bufferedWriter.newLine();

        //bufferedWriter.close();

        scanner.close();
    }
}
