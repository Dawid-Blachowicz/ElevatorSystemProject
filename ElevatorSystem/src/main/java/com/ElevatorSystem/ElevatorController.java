package com.ElevatorSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/elevators")
@CrossOrigin(origins = "*")
public class ElevatorController {
    ElevatorSystem elevatorSystem;

    @Autowired
    public ElevatorController(ElevatorSystem elevatorSystem) {this.elevatorSystem = elevatorSystem;}

    @PutMapping("/pickup")
    public void pickup(@RequestBody int[] pickupData) {
        elevatorSystem.pickup(pickupData[0], pickupData[1]);
    }

    @GetMapping("/{id}")
    public int getById(@PathVariable String id) {
        return elevatorSystem.getById(Integer.parseInt(id)).getCurrentFloor();
    }

}
